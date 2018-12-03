import React, { Component } from 'react';

const HOC = WrappedComponent =>
  class extends Component {
    state = {
      isLoaded: false,
      msg: 'now loading ...'
    };
    componentDidMount() {
      this.request();
    }

    request = async () => {
      const PATH = 'https://dog.ceo/api/breeds/image/random';
      const dataFetch = await fetch(PATH);
      const json = await dataFetch.json();
      this.setState({ isLoaded: true, msg: json.message });
    };

    render() {
      return <WrappedComponent {...this.state} />;
    }
  };

export default HOC;
