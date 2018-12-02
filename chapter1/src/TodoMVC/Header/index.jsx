// @flow

import React, { useState, useContext } from 'react';
import Context from '../Context';

const Header = () => {
  const { updater } = useContext(Context);
  const [value, setValue] = useState('');

  const submitValue = (text, keyCode) => {
    if (keyCode === 13) {
      updater(text);
      setValue('');
    }
  };

  return (
    <header className="header">
      <h1>todos</h1>
      <input
        className="new-todo"
        placeholder="What needs to be done?"
        autoFocus
        onChange={e => setValue(e.target.value)}
        onKeyUp={e => submitValue(e.target.value, e.keyCode)}
        value={value}
      />
    </header>
  );
};

export default Header;
