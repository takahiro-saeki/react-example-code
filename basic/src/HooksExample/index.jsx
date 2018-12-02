import React, { useState } from 'react';

const HooksExample = () => {
  const [value, setValue] = useState(0);

  const add = () => setValue(value + 1);
  const subtract = () => setValue(value - 1);
  const reset = () => setValue(0);

  const asyncAdd = async () =>
    await setTimeout(() => setValue(value + 1), 1000);

  return (
    <div>
      <button type="button" onClick={add}>
        +
      </button>
      <button type="button" onClick={subtract}>
        -
      </button>
      <button type="button" onClick={asyncAdd}>
        async add
      </button>
      <button type="button" onClick={reset}>
        reset
      </button>
      <div>number is: {value}</div>
    </div>
  );
};

export default HooksExample;
