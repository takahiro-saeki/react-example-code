// @flow

import React from 'react';
import { v4 } from 'uuid';
import mock from './mock';
import HOC from './HOC';
import { MainArea, List, NameArea, ColorArea } from './style';

type Props = {
  data: Array<Object>
};

const config = {
  ignore: 'beige',
  order: 'shuffle',
  data: mock
};

const Example = ({ data }: Props) => (
  <MainArea>
    {data.map(item => (
      <List key={v4()}>
        <NameArea>{item.name}</NameArea>
        <ColorArea color={item.color}>{item.color}</ColorArea>
      </List>
    ))}
  </MainArea>
);

export default HOC(config)(Example);
