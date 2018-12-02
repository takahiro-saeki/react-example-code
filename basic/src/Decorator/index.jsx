// @flow

// eslint-disable-next-line
import React, { Component } from 'react';
import { camelCase, random } from 'lodash';
import NumberField from './NumberField';
import decoratorExample from './decoratorExample';

type Props = {
  message: any,
  children: any
};

type State = {
  minRange: number,
  maxRange: number,
  errorMsg: any,
  result: number
};

// $FlowFixMe
@decoratorExample({
  component: NumberField,
  props: {
    title: 'Generator'
  },
  parentProps: {
    message: {
      sameValue: '同じ値です。',
      overMaxValue: '最小値が最大値よりも大きいです。',
      emptyValue: '最大値、最小値に値を入力してください。'
    }
  }
})
class Decorator extends Component<Props, State> {
  state = {
    minRange: 1,
    maxRange: 2,
    errorMsg: '',
    result: 0
  };

  handleChange = ({ type, value }: any) => {
    const toNumber = Number(value);
    if (isNaN(toNumber)) {
      return;
    }
    this.setState(state => ({
      ...state,
      [camelCase(type)]: toNumber === 0 ? '' : toNumber
    }));
  };

  generate = () => {
    const { minRange, maxRange } = this.state;
    const { message } = this.props;

    if (!minRange || !maxRange) {
      this.setState(state => ({
        ...state,
        errorMsg: message.emptyValue
      }));
      return;
    }
    if (minRange === maxRange) {
      this.setState(state => ({ ...state, errorMsg: message.sameValue }));
      return;
    }
    if (minRange > maxRange) {
      this.setState(state => ({
        ...state,
        errorMsg: message.overMaxValue
      }));
      return;
    }
    this.setState(state => ({
      ...state,
      result: random(minRange, maxRange),
      errorMsg: ''
    }));
  };

  render() {
    const { children } = this.props;
    return children({
      ...this.state,
      formChange: this.handleChange,
      invoke: this.generate
    });
  }
}

export default Decorator;
