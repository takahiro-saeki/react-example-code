import React, { useState } from 'react';
import { Container } from './style';

const Header = ({ title }) => {
  const [value, setValue] = useState('');
  return (
    <Container>
      <div>{title}</div>
      <input
        value={value}
        onChange={e => setValue(e.target.value)}
        onKeyDown={e => console.log(value)}
      />
    </Container>
  );
};

export default Header;
