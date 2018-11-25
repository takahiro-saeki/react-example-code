import React, { Component } from 'react';
import moment from 'moemnt';

export default class ClassComponent extends Component {
  state = {
    time: moment().format('YYYY/MM/DD HH:mm ss')
  }

  render() {
    const { time } = this.state;
    return <div>time is <time>{time}</time></div>
  }
}