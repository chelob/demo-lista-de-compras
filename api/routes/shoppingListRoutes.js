const shoppingList = require('../controllers/shoppingListController');

module.exports = (app) => {
  app.route('/items')
    .get(shoppingList.list_all_items)
    .post(shoppingList.create_an_item);

  app.route('/items/:itemId')
    .delete(shoppingList.delete_an_item);
};
