import React from 'react';
import App from './App';
import Container from './style';

const CompoundExample = () => (
  <div>
    <App.HeaderArea />
    <Container>main area</Container>
    <App.FooterArea />
  </div>
);

export default CompoundExample;
