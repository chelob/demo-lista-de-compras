import { combineReducers } from 'redux';
import { items, itemsHasErrored, itemsIsLoading,
  addItem } from './reducer_item';

export default combineReducers({
  items,
  itemsHasErrored,
  itemsIsLoading,
  addItem,
});
