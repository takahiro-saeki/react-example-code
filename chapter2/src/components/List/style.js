import styled from 'styled-components';

export const Container = styled.div`
  padding: 1rem;
  border-bottom: 1px solid rgb(238, 238, 238);
`;

export const Title = styled.h2`
  font-size: 14px;
  margin: 0;
  color: 222;
  font-weight: 400;
`;

export const MainArea = styled.div`
  display: flex;
  font-size: 11px;
  color: dimgray;
`;

export const ItemArea = styled.div`
  border-right: ${({ isLast }) => (isLast ? 'none' : '1px solid #cfcfcf')};
  padding: 0 0.25rem;
  font-weight: 500;
`;
