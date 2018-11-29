import React, {
  useContext,
  useEffect,
  useState,
  useCallback,
  useMemo
} from 'react';
import { v4 } from 'uuid';
import { Header, List, Pagination } from '@chapter2/components';
import useWindowWidth from '@chapter2/modules/useWindowWidth';
import Context from '../../Context';
import { addTodo } from '../../actions';
import { ListArea } from './style';

const PATH = '//hn.algolia.com/api/v1/search?query=react';
const SEARCH_PATH = query =>
  `//hn.algolia.com/api/v1/search?query=${query}&tags=story`;
const getData = async (query = false) => {
  if (query) {
    const SERACH = SEARCH_PATH(query);
    console.log(SERACH);
    const fetchData = await fetch(SERACH);
    const json = await fetchData.json();
    return json;
  }
  const fetchData = await fetch(PATH);
  const json = await fetchData.json();
  return json;
};

const App = () => {
  const { store, dispatch } = useContext(Context);
  const [value, setValue] = useState('');

  const windowWidth = useWindowWidth();

  const invokeSearch = async ({ searchValue, keyCode, type = 'default' }) => {
    if (keyCode === 13) {
      console.log('enter');
      const search = await getData(searchValue);
      dispatch(addTodo(search));
      return;
    }

    if (type === 'submit') {
      const search = await getData(searchValue);
      dispatch(addTodo(search));
      return;
    }
    setValue(searchValue);
  };

  console.log(store.posts.data);

  useEffect(() => {
    (async () => {
      try {
        const data = await getData();
        dispatch(addTodo(data));
      } catch (e) {
        console.error(e);
      }
    })();
  }, []);

  return (
    <div>
      <Header title="Hacker News Client" onSubmit={invokeSearch} />
      <ListArea>
        {store.posts.data.map(item => (
          <List {...item} width={windowWidth} key={v4()} />
        ))}
      </ListArea>
      <Pagination />
    </div>
  );
};

export default App;
