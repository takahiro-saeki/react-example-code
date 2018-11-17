import React, { useState } from 'react';

const Counter = () => {
  const [number, setNumber] = useState(0);
  return (
    <div>
      <div>number is: {number}</div>
      <div onClick={() => setNumber(number + 1)}>+</div>
      <div onClick={() => setNumber(number - 1)}>-</div>
    </div>
  );
};

export default Counter;
