import React, { useEffect, useCallback } from 'react';
import MainView from '@chapter2/pages/MainView';
import useWindowWidth from '@chapter2/modules/useWindowWidth';
import { getSearch, getFavoItems } from '@chapter2/modules/fetchLogic';
import { addTodo, addFavoItem } from '@chapter2/actions';
import connect from '../../connect';

const App = ({ posts, addTodo, addFavoItem, favorite }) => {
  const windowWidth = useWindowWidth();

  const invokeSearch = async ({ searchValue, keyCode, type = 'default' }) => {
    if (keyCode === 13) {
      const search = await getSearch(searchValue);
      addTodo(search.hits);
      return;
    }

    if (type === 'submit') {
      const search = await getSearch(searchValue);
      addTodo(search.hits);
      return;
    }
  };

  const invokeFavoItems = async () => {
    const getItems = await getFavoItems(favorite);
    const addingFavoFlag = await getItems.map(item => ({
      ...item,
      isFavorite: true
    }));
    await addTodo(addingFavoFlag);
  };

  const memoizePosts = useCallback(
    () => {
      const mapItem = posts.map(item => {
        const checkFavo = favorite.includes(
          item.id ? item.id : Number(item.objectID)
        );
        return {
          ...item,
          isFavorite: checkFavo
        };
      });
      return mapItem;
    },
    [posts, favorite]
  );

  useEffect(() => {
    (async () => {
      try {
        const data = await getSearch();
        addTodo(data.hits);
      } catch (e) {
        // error logic
      }
    })();
  }, []);

  const hundlers = {
    invokeSearch,
    posts: memoizePosts(),
    windowWidth,
    addFavoItem,
    invokeFavoItems
  };

  return <MainView {...hundlers} />;
};

const mapStateToProps = store => ({
  posts: store.posts.data,
  favorite: store.favorite.favorite_posts
});

const mapDispathToProps = dispatch => ({
  addTodo: param => dispatch(addTodo(param)),
  addFavoItem: param => dispatch(addFavoItem(param))
});

export default connect(
  mapStateToProps,
  mapDispathToProps
)(App);
