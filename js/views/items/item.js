define([
  'jquery',
  'underscore',
  'backbone',
  'text!templates/items/item.html'
], function($, _, Backbone, itemTemplate) {

  var ItemView = Backbone.View.extend({

    tagName: 'li',

    // Cache the template function for a single item.
    template: _.template(itemTemplate),

    // Called when the view is first created
    initialize: function() {
      this.model.on('change', this.render, this);
    },

    render: function() {
      this.$el.html(this.template(this.model.toJSON()));
      return this;
    }

  });

  return ItemView;
});