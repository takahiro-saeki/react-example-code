import { v4 } from 'uuid';
import { persist } from './modules';

const hundlers = (state, setState) => ({
  updater: title => {
    const updateState = [...state.data, { title, isChecked: false, id: v4() }];
    const mergeStoreData = {
      ...state,
      data: updateState
    };
    setState(mergeStoreData);
    persist.save(updateState);
  },
  removeItem: id => {
    const removeItems = state.data.filter(item => item.id !== id);
    const mergeStoreData = {
      ...state,
      data: removeItems
    };
    setState(mergeStoreData);
    persist.save(removeItems);
  },
  checkItem: id => {
    const mergeData = state.data.map(item => {
      if (item.id === id) {
        return {
          ...item,
          isChecked: !item.isChecked
        };
      }
      return item;
    });
    const mergeStoreData = {
      ...state,
      data: mergeData
    };
    setState(mergeStoreData);
    persist.save(mergeData);
  },
  changeAllChecked: condition => {
    const changeState = state.data.map(item => ({
      ...item,
      isChecked: !condition
    }));
    const mergeStoreData = { ...state, data: changeState };
    setState(mergeStoreData);
    persist.save(hangeState);
  },
  isAllChecked: () =>
    state.data.filter(item => item.isChecked !== true).length === 0,
  leftItems: () => state.data.filter(item => item.isChecked !== true).length,
  changeFilter: (current = 'all') => (state.current = current),
  clearComplete: () => {
    const clearCompletedData = state.data.filter(
      item => item.isChecked === false
    );
    const mergeStoreData = {
      ...state,
      data: clearCompletedData
    };
    setState(mergeStoreData);
    persist.save(clearCompletedData);
  },
  updateItem: (title, key) => {
    const updateState = state.data.map(item => {
      if (item.id === key) {
        return {
          ...item,
          title
        };
      }
      return item;
    });
    const mergeStoreData = {
      ...state,
      data: updateState
    };
    setState(mergeStoreData);
    persist.save(updateState);
  }
});

export default hundlers;
