import styled from 'styled-components';

export const SwitchBtn = styled.button`
  color: ${({ color }) => color};
  background: ${({ bg }) => bg};
  border: none;
  border-radius: 1rem;
  padding: 1rem;
  font-size: 14px;
  margin: 0 0.5rem;
  outline: 0;
`;

export const MainArea = styled.div`
  margin-top: 0.5rem;
  background: ${({ bg }) => bg};
  color: ${({ color }) => color};
  padding: 1rem;
`;
