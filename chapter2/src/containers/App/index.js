import React, { useContext, useEffect } from 'react';
import { Header, List } from '@/components';
import Context from '../../Context';
import { ListArea } from './style';

const PATH = '//hn.algolia.com/api/v1/search?query=react';
const getData = async () => {
  const fetchData = await fetch(PATH);
  const json = await fetchData.json();
  return json;
};

const App = () => {
  const { store, dispatch } = useContext(Context);

  useEffect(async () => {
    const data = await getData();
    dispatch({ type: 'ADD_POST', payload: data });
    console.log(data);
  }, []);

  return (
    <div>
      <Header title="Hacker News Client" />
      <ListArea>
        {store.posts.data.map(item => (
          <List title={item.title} />
        ))}
      </ListArea>
    </div>
  );
};

export default App;
