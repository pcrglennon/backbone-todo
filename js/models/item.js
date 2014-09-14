define([
  'underscore',
  'backbone'
], function(_, Backbone) {
  var Item = Backbone.Model.extend({
    defaults: {
      description: '',
      completed: false
    }
  });

  return Item;
});
