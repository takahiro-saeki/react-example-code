const init = {
  data: []
};

const posts = (state = init, action) => {
  if (action.type === 'ADD_POST') {
    console.log('posts check', { payload: action.payload, state });
    return { ...state, data: action.payload.hits };
  }
  return state;
};

export default posts;
