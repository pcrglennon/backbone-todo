define([
  'jquery',
  'underscore',
  'backbone',
  'views/items/item'
], function($, _, Backbone, ItemView) {

  var ItemListView = Backbone.View.extend({

    tagName: 'ul',
    id: 'items',

    initialize: function() {
      this.collection.on('add', this.addOne, this);
    },

    render: function() {
      this.collection.forEach(this.addOne, this);
      return this;
    },

    addOne: function(item) {
      var itemView = new ItemView({model: item});
      this.$el.append(itemView.render().el);
    }
  });

  return ItemListView;
});