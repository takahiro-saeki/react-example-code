// @flow

import React, { useState } from 'react';
import {
  Container,
  InputArea,
  SearchForm,
  SubmitBtn,
  MainSection,
  HeaderBtn
} from './style';

type Props = {
  title: string,
  onSubmit: Function,
  showFavoriteItems: Function
};
const Header = ({ title, onSubmit, showFavoriteItems }: Props) => {
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
        <HeaderBtn onClick={showFavoriteItems}>favorite</HeaderBtn>
      </MainSection>
    </Container>
  );
};

export default Header;
