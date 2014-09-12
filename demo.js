
var Todo = Backbone.Model.extend({

  defaults: {
    description: '',
    completed: false
  }
});

var TodoList = Backbone.Collection.extend({
  model: Todo
});


// Views


var TodoView = Backbone.View.extend({

  tagName: 'li',

  // Cache the template function for a single item.
  template: _.template( $('#todo-template').html() ),

  // Called when the view is first created
  initialize: function() {
    console.log("Todo View init > " + this.model.attributes);
    this.model.on('change', this.render, this);
  },

  render: function() {
    this.$el.html(this.template(this.model.toJSON()));
    return this;
  }

});

var TodoListView = Backbone.View.extend({

  tagName: 'ul',
  id: 'todos',

  initialize: function() {
    this.collection.on('add', this.addOne, this);
  },

  render: function() {
    this.collection.forEach(this.addOne, this);
    return this;
  },

  addOne: function(todo) {
    var todoView = new TodoView({model: todo});
    this.$el.append(todoView.render().el);
  }
});

// $(function() {
  var todo =         new Todo({description: "Get a job"}),
      todoList =     new TodoList([todo]),
      todoListView = new TodoListView({collection: todoList});

  $('#container').append(todoListView.render().el);
// });