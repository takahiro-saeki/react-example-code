import styled from 'styled-components';

export const MainArea = styled.ul`
  padding: 0;
  margin: 0;
  list-style: none;
`;

export const List = styled.li`
  display: flex;
  padding: 0.5rem;
`;

export const NameArea = styled.div`
  width: 140px;
`;

export const ColorArea = styled.div`
  background: ${({ color }) => color};
  padding: 0 0.5rem;
`;
