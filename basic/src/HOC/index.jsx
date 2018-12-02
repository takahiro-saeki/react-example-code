// @flow

import React from 'react';
import HOC from './HOC';

type Props = {
  msg: string,
  isLoaded: boolean
};

const Example = ({ isLoaded, msg }: Props) => (
  <div>{isLoaded ? <img src={msg} width={300} alt="dog" /> : msg}</div>
);

export default HOC(Example);
