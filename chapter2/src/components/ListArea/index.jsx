// @flow

import * as React from 'react';
import Container from './style';

type Props = {
  children: React.Node
};

const ListArea = ({ children }: Props) => <Container>{children}</Container>;

export default ListArea;
