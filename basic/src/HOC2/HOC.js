import React from 'react';
import { shuffle } from 'lodash';

const HOC = config => {
  const { ignore, order, data } = config;
  let items = data;
  if (ignore) {
    const deleteItems = items.filter(({ name }) => name !== ignore);
    items = deleteItems;
  }
  switch (order) {
    case 'asc':
      {
        items = items.sort();
      }
      break;
    case 'des':
      {
        items = items.sort().reverse();
      }
      break;
    case 'shuffle':
      {
        items = shuffle(items);
      }
      break;
    default: {
      items = items.sort();
    }
  }
  return WrappedComponent => () => <WrappedComponent data={items} />;
};

export default HOC;
