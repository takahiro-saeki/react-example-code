// @flow

import React, { Component } from 'react';
import moment from 'moment';

type State = {
  time: string
};

export default class ClassComponent extends Component<void, State> {
  state = {
    time: moment().format('YYYY/MM/DD HH:mm ss')
  };

  componentDidMount() {
    setInterval(() => this.updateMethod(), 1000);
  }

  updateMethod = () => {
    this.setState({
      time: moment().format('YYYY/MM/DD HH:mm ss')
    });
  };

  render() {
    const { time } = this.state;

    return (
      <div>
        time is: <time>{time}</time>
      </div>
    );
  }
}
