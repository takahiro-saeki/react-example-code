// @flow

import React from 'react';
// $FlowFixMe
import { Header, ListArea, List } from '@chapter2/components';
import { v4 } from 'uuid';

type Props = {
  posts: Array<Object>,
  invokeSearch: () => void,
  windowWidth: number,
  addFavoItem: () => void,
  invokeFavoItems: () => void
};

const MainView = ({
  posts,
  invokeSearch,
  windowWidth,
  addFavoItem,
  invokeFavoItems
}: Props) => (
  <div>
    <Header
      title="Hacker News Client"
      onSubmit={invokeSearch}
      showFavoriteItems={invokeFavoItems}
    />
    <ListArea>
      {posts.map(item => (
        <List
          {...item}
          width={windowWidth}
          key={v4()}
          addFavorite={addFavoItem}
        />
      ))}
    </ListArea>
  </div>
);

export default MainView;
