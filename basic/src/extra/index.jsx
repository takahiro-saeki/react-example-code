import React, { Component } from 'react';
import moment from 'moment';
import Container from './style';

export default class ClassComponent extends Component {
  state = {
    hour: moment().format('HH'),
    minute: moment().format('mm'),
    second: moment().format('ss')
  };

  componentDidMount() {
    setInterval(() => this.updateMethod(), 1000);
  }

  updateMethod = () => {
    console.log(this.state);
    const checkHour =
      Number(moment().format('HH')) > 12
        ? Number(moment().format('HH')) - 12
        : Number(moment().format('HH'));
    const hour = (checkHour * 360) / 12;
    const minute = (Number(moment().format('mm')) * 360) / 60;
    const second = (Number(moment().format('ss')) * 360) / 60;
    this.setState({
      hour,
      minute,
      second
    });
  };

  render() {
    const { time, hour, minute, second } = this.state;

    return (
      <Container>
        <div id="clock">
          <div
            id="hour"
            className="hand"
            style={{ transform: `rotate(${hour}deg)` }}
          />
          <div
            id="min"
            className="hand"
            style={{ transform: `rotate(${minute}deg)` }}
          />
          <div
            id="sec"
            className="hand"
            style={{ transform: `rotate(${second}deg)` }}
          />
          <div id="indicators" />
        </div>
      </Container>
    );
  }
}
