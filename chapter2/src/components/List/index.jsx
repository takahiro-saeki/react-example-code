import React from 'react';
import moment from 'moment';
import { Container, Title, MainArea, ItemArea } from './style';

const List = ({ title, created_at, url, author, width }) => {
  console.log('count how render List');
  return (
    <Container>
      <Title>{title}</Title>
      <MainArea>
        <ItemArea>Author: {author}</ItemArea>
        <ItemArea>
          Published Date: {moment(created_at).format('YYYY/MM/DD HH:mm')}
        </ItemArea>
        {width > 900 ? <ItemArea isLast>URL: {url} </ItemArea> : null}
      </MainArea>
    </Container>
  );
};

export default List;
