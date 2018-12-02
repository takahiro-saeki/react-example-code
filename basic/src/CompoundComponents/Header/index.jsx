// @flow

import React from 'react';
import Container from './style';

type Props = {
  title: string
};

const Header = ({ title }: Props) => <Container>{title}</Container>;

export default Header;
