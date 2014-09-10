// Define a Todo Model
var Todo = Backbone.Model.extend({
  // Default todo attribute values
  defaults: {
    title: '',
    completed: false
  },

  initialize: function() {

  }
});

var myTodo = new Todo({title: 'Fix this junk'});

// Views


var TodoView = Backbone.View.extend({

  tagName: 'li',

  // Cache the template function for a single item.
  template: _.template( $('#item-template').html() ),

  // Called when the view is first created
  initialize: function() {
    this.model.on('change', this.render, this);

    this.render();
  },

  // Re-render the titles of the todo item.
  render: function() {
    this.$el.html(this.template(this.model.toJSON()));
    return this;
  }

});

var todoView = new TodoView({model: myTodo});
$('#todos').append(todoView.$el);