
define([
  'jquery',
  'models/item',
  'collections/items',
  'views/items/list'
], function($, Item, ItemList, ItemListView) {
  var initialize = function() {
    var item =         new Item({description: "Get a job"}),
        item2 =         new Item({description: "Set up Express Server"}),
        itemList =     new ItemList([item, item2]),
        itemListView = new ItemListView({collection: itemList});

    $('#container').append(itemListView.render().el);
  };

  return {
    initialize: initialize
  };
});


