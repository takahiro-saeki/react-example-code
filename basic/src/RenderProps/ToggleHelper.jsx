import React, { Component } from 'react';

export default class ToggleHelper extends Component {
  static defaultProps = {
    init: false
  };

  state = {
    toggle: false
  };

  componentDidMount() {
    this.initialize();
  }

  changeToggle = () => {
    this.setState(({ toggle }) => ({ toggle: !toggle }));
  };

  initialize = () => {
    const { init } = this.props;
    this.setState({ toggle: init });
  };

  render() {
    const { toggle } = this.state;
    const { children } = this.props;
    return children({ toggle, changeToggle: this.changeToggle });
  }
}
