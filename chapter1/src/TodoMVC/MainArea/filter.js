// @flow

const filter = (items: Array<Object>, type: string) => {
  switch (type) {
    case 'all': {
      return items;
    }
    case 'active': {
      return items.filter(activeItem => activeItem.isChecked === true);
    }
    case 'completed': {
      return items.filter(completedItem => completedItem.isChecked !== true);
    }
    default: {
      return items;
    }
  }
};

export default filter;
