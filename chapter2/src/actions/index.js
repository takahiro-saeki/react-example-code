// @flow

export const addTodo = (payload: Array<Object>) => ({
  type: 'ADD_POST',
  payload
});

export const addFavoItem = (payload: number) => ({
  type: 'ADD_FAVORITE_ITEM',
  payload: {
    id: payload
  }
});
