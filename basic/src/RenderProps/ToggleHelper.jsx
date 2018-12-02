// @flow
import { Component } from 'react';

type Props = {
  init?: boolean,
  children: any
};

type State = {
  toggle: boolean
};

export default class ToggleHelper extends Component<Props, State> {
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
