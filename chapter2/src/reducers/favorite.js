const init = {
  favorite_posts: []
};

const favorite = (state = init, action) => {
  switch (action.type) {
    case 'ADD_FAVORITE_ITEM': {
      const mergeArray = [...state.favorite_posts, action.payload.id];
      if (state.favorite_posts.includes(action.payload.id)) {
        const removeItem = mergeArray.filter(
          item => item !== action.payload.id
        );
        return {
          ...state,
          favorite_posts: removeItem
        };
      }
      return {
        ...state,
        favorite_posts: mergeArray
      };
    }
    default: {
      return state;
    }
  }
};

export default favorite;
