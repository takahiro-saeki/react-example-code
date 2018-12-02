// @flow

export const addTodo = payload => ({
  type: 'ADD_POST',
  payload
});

export const addFavoItem = payload => ({
  type: 'ADD_FAVORITE_ITEM',
  payload: {
    id: payload
  }
});
