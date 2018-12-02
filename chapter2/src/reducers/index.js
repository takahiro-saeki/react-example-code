import combineReducers from './combineReducers';
import favorite from './favorite';
import posts from './posts';

const reducer = combineReducers({
  favorite,
  posts
});

export default reducer;
