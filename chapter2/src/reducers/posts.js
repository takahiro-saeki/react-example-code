const init = {
  data: []
};

const posts = (state = init, action) => {
  if (action.type === 'ADD_POST') {
    return { ...state, data: action.payload };
  }
  return state;
};

export default posts;
