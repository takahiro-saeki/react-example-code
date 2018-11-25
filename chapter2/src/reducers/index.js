import combineReducers from './combineReducers';
import favorite from './favorite';
import options from './options';
import posts from './posts';

const reducer = combineReducers({
  favorite,
  options,
  posts
});

/*
const init = {
  counter: 0
}

const reducer = (state = init, action) => {
  console.log(state, action)
  if (action.type === 'ADD_TODO') {
    return { ...state, counter: action.payload }
  }
  return state
}
*/

export default reducer;
