import React, { useState } from 'react';
import {
  Container,
  InputArea,
  SearchForm,
  SubmitBtn,
  MainSection
} from './style';

const Header = ({ title, onSubmit }) => {
  const [value, setValue] = useState('');

  return (
    <Container>
      <MainSection>
        <div>{title}</div>
        <InputArea>
          <SearchForm
            value={value}
            onChange={e => setValue(e.target.value)}
            onKeyDown={e =>
              onSubmit({ keyCode: e.keyCode, searchValue: value })
            }
          />
        </InputArea>
        <SubmitBtn
          onClick={() => onSubmit({ searchValue: value, type: 'submit' })}
        >
          Submit
        </SubmitBtn>
      </MainSection>
    </Container>
  );
};

export default Header;
