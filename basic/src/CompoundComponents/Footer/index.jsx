// @flow

import React from 'react';
import Container from './style';

type Props = {
  title: string
};

const Footer = ({ title }: Props) => <Container>{title}</Container>;

export default Footer;
