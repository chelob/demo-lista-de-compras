export const ITEMS_HAS_ERRORED = 'ITEMS_HAS_ERRORED';
export const ITEMS_IS_LOADING = 'ITEMS_IS_LOADING';
export const ITEMS_FETCH_DATA_SUCCESS = 'ITEMS_FETCH_DATA_SUCCESS';
export const ADD_ITEM_SUCCESS = 'ADD_ITEM_SUCCESS';
export const ADD_ITEM_HAS_ERRORED = 'ADD_ITEM_HAS_ERRORED';
export const REMOVE_ITEM_HAS_ERRORED = 'REMOVE_ITEM_HAS_ERRORED';

export const itemsHasErrored = bool => ({
  type: ITEMS_HAS_ERRORED,
  hasErrored: bool,
});

export const itemsIsLoading = bool => ({
  type: ITEMS_IS_LOADING,
  isLoading: bool,
});

export const itemsFetchDataSuccess = items => ({
  type: ITEMS_FETCH_DATA_SUCCESS,
  items,
});

export const addItemSuccess = item => ({
  type: ADD_ITEM_SUCCESS,
  item,
});

export const addItemsHasErrored = bool => ({
  type: ADD_ITEM_HAS_ERRORED,
  hasErrored: bool,
});

export const removeItemHasErrored = bool => ({
  type: REMOVE_ITEM_HAS_ERRORED,
  hasErrored: bool,
});

const checkStatus = (response) => {
  if (response.status >= 200 && response.status < 300) {
    return response;
  }
  const error = new Error(`HTTP Error ${response.statusText}`);
  error.status = response.statusText;
  error.response = response;
  console.log(error); // eslint-disable-line no-console
  throw error;
};

const parseJSON = response => response.json();

export function createItem(item) {
  return (dispatch) => {
    const fetchData = {
      method: 'POST',
      body: JSON.stringify(item),
      headers: { 'Content-Type': 'application/json' },
    };

    fetch('items/', fetchData)
      .then(checkStatus)
      .then(dispatch(fetchItems()))
      .catch(() => dispatch(addItemsHasErrored(true)));
  };
}

export function removeItem(itemId) {
  return (dispatch) => {
    const fetchData = {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
    };

    fetch('items/'.concat(itemId), fetchData)
      .then(checkStatus)
      .then(dispatch(fetchItems()))
      .catch(() => dispatch(removeItemHasErrored(true)));
  };
}

export function fetchItems() {
  return (dispatch) => {
    dispatch(itemsIsLoading(true));

    fetch('items/', {
      accept: 'application/json',
    }).then((response) => {
      if (!response.ok) {
        throw Error(response.statusText);
      }

      dispatch(itemsIsLoading(false));

      return response;
    })
      .then(response => checkStatus(response))
      .then(response => parseJSON(response))
      .then(items => dispatch(itemsFetchDataSuccess(items)))
      .catch(() => dispatch(itemsHasErrored(true)));
  };
}

export default fetchItems;
