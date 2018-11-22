const init = {
  favorite_posts: [],
  order: 'asc'
}

const favorite = (state = init, action) => {
  if (action.type === 'ADD_FAVORITE_TODO') {
    return { ...state, order: 'none' }
  }
  return state
}

export default favorite;