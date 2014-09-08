// Define a Todo Model
var Todo = Backbone.Model.extend({
  // Default todo attribute values
  defaults: {
    title: '',
    completed: false
  },

  initialize: function() {
    console.log("todo has been initialized");
    this.on("change:title", function() {
      console.log("title changed to > " + this.get("title"));
    });
  }
});

// Instantiate the Todo Model with a title, with the completed attribute
// defaulting to false
var myTodo = new Todo({
  title: 'Check attributes property of the logged models in the console.'
});

var TodoView = Backbone.View.extend({

  tagName: 'ul',
  id: 'todos',

  // Cache the template function for a single item.
  todoTpl: _.template( $('#item-template').html() ),

  // Called when the view is first created
  initialize: function() {
    this.model.on('change', this.render, this);
  },

  // Re-render the titles of the todo item.
  render: function() {
    console.log(this.model.attributes);
    console.log(this.$el);
    this.$el.html(this.todoTpl(this.model.attributes));
    return this;
  }

});

var todoView = new TodoView({model: myTodo});

todoView.render();
