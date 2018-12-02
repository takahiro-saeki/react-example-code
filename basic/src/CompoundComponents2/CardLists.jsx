// @flow

import React, { Component, Children, cloneElement } from 'react';
import { SwitchBtn, MainArea } from './style';

type State = {
  currentType: string
};

type Props = {
  children: any
};

export default class CardLists extends Component<Props, State> {
  static RedCard = ({ type }: { type: string }) =>
    type === 'red' ? (
      <MainArea bg={type} color="white">
        red
      </MainArea>
    ) : null;
  static YellowCard = ({ type }: { type: string }) =>
    type === 'yellow' ? <MainArea bg={type}>yellow</MainArea> : null;
  static BlueCard = ({ type }: { type: string }) =>
    type === 'blue' ? (
      <MainArea bg={type} color="white">
        blue
      </MainArea>
    ) : null;
  static SelectField = ({ changeType }: () => void) => (
    <ul>
      <SwitchBtn bg="red" color="white" onClick={() => changeType('red')}>
        red
      </SwitchBtn>
      <SwitchBtn bg="yellow" onClick={() => changeType('yellow')}>
        yellow
      </SwitchBtn>
      <SwitchBtn bg="blue" color="white" onClick={() => changeType('blue')}>
        blue
      </SwitchBtn>
    </ul>
  );
  state = {
    currentType: 'red'
  };

  changeType = (type: string) => {
    this.setState({ currentType: type });
  };

  render() {
    const { children } = this.props;
    const { currentType } = this.state;
    return Children.map(children, child =>
      cloneElement(child, {
        type: currentType,
        changeType: this.changeType
      })
    );
  }
}
