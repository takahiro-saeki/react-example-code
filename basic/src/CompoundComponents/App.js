// @flow

import React, { Component } from 'react';
import Header from './Header';
import Footer from './Footer';

type Props = {
  children: any
};

export default class App extends Component<Props, void> {
  static HeaderArea = () => <Header title="header" />;
  static FooterArea = () => <Footer title="footer" />;

  render() {
    const { children } = this.props;
    return children;
  }
}
