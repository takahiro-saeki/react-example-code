import React, { Component } from 'react';
import Counter from './Counter';
import CounterBtn from './CounterBtn';

export default class CounterContainer extends Component {
  state = {
    count: 0
  };

  add = () => {
    this.setState(({ count }) => ({ count: count + 1 }));
  };

  subtract = () => {
    this.setState(({ count }) => ({ count: count - 1 }));
  };

  asyncAdd = async () => {
    await setTimeout(
      () => this.setState(({ count }) => ({ count: count + 1 })),
      1000
    );
  };

  reset = () => {
    this.setState({ count: 0 });
  };

  render() {
    const { count } = this.state;
    return (
      <div>
        <CounterBtn title="+" onClick={this.add} />
        <CounterBtn title="-" onClick={this.subtract} />
        <CounterBtn title="async add" onClick={this.asyncAdd} />
        <CounterBtn title="reset" onClick={this.reset} />

        <Counter count={count} />
      </div>
    );
  }
}
