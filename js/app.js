
define([
  'jquery',
  'models/item',
  'collections/items',
  'views/items/list'
], function($, Item, ItemList, ItemListView) {
  var initialize = function() {
    var item =         new Item({description: "Get a job"}),
        itemList =     new ItemList([item]),
        itemListView = new ItemListView({collection: itemList});

    $('#container').append(itemListView.render().el);
  };

  return {
    initialize: initialize
  };
});


