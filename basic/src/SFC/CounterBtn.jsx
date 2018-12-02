// @flow

import React from 'react';

type Props = {
  title: string,
  onClick: () => void
};

const CounterBtn = ({ title, onClick }: Props) => (
  <button type="button" onClick={onClick}>
    {title}
  </button>
);

export default CounterBtn;
