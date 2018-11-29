import React from 'react';

const CounterBtn = ({ title, onClick }) => (
  <button onClick={onClick}>{title}</button>
);

export default CounterBtn;
