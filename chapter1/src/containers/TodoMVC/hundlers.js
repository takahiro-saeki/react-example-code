import { v4 } from 'uuid';

const hundlers = (state, setState) => ({
  updater: title => {
    setState({
      ...state,
      data: [...state.data, { title, isChecked: false, id: v4() }]
    });
  },
  removeItem: id =>
    setState({ data: state.data.filter(item => item.id !== id) }),
  checkItem: id =>
    setState({
      ...state,
      data: state.data.map(item => {
        if (item.id === id) {
          return {
            ...item,
            isChecked: !item.isChecked
          };
        }
        return item;
      })
    }),
  changeAllChecked: condition => {
    const changeState = state.data.map(item => ({
      ...item,
      isChecked: !condition
    }));
    setState({ ...state, data: changeState });
  },
  isAllChecked: () =>
    state.data.filter(item => item.isChecked !== true).length === 0,
  leftItems: () => state.data.filter(item => item.isChecked !== true).length,
  changeFilter: (current = 'all') => (state.current = current),
  clearComplete: () =>
    setState({
      ...state,
      data: state.data.filter(item => item.isChecked === false)
    })
});

export default hundlers;
