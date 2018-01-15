import Immutable from 'seamless-immutable';
import * as types from '../actions/index';

const initialState = Immutable({
  items: {},
});

export function itemsHasErrored(state = false, action) {
  switch (action.type) {
    case types.ITEMS_HAS_ERRORED:
      return action.hasErrored;

    default:
      return state;
  }
}

export function itemsIsLoading(state = false, action) {
  switch (action.type) {
    case types.ITEMS_IS_LOADING:
      return action.isLoading;

    default:
      return state;
  }
}

export function items(state = [], action) {
  switch (action.type) {
    case types.ITEMS_FETCH_DATA_SUCCESS:
      return action.items;

    default:
      return state;
  }
}

export function addItem(state = initialState.items, action) {
  switch (action.type) {
    case types.ADD_ITEM_SUCCESS:
      // TODO: All items are fetched after add...
      return state;
    default:
      return state;
  }
}
