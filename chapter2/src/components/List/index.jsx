// @flow

import React from 'react';
import moment from 'moment';
import { Container, Title, MainArea, ItemArea, StartArea } from './style';

type Props = {
  title: string,
  created_at: string,
  url: string,
  author: string,
  width: number,
  addFavorite: Function,
  isFavorite: boolean,
  objectID: string,
  id: number
};

const List = ({
  title,
  created_at,
  url,
  author,
  width,
  addFavorite,
  isFavorite,
  objectID,
  id
}: Props) => (
  <Container>
    <StartArea
      onClick={() => addFavorite(id ? id : Number(objectID))}
      isFavorite={isFavorite}
    >
      {isFavorite ? '★' : '☆'}
    </StartArea>
    <div>
      <Title>{title}</Title>
      <MainArea>
        <ItemArea>Author: {author}</ItemArea>
        <ItemArea isLast={width < 900}>
          Published Date: {moment(created_at).format('YYYY/MM/DD HH:mm')}
        </ItemArea>
        {width > 900 ? <ItemArea isLast>URL: {url} </ItemArea> : null}
      </MainArea>
    </div>
  </Container>
);

export default List;
