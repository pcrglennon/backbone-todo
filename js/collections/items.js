define([
  'underscore',
  'backbone',
  'models/item'
], function(_, Backbone, Item) {
  var ItemList = Backbone.Collection.extend({
    model: Item
  });

  return ItemList;
});
