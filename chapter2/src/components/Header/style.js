import styled from 'styled-components';

export const Container = styled.header`
  position: relative;
  height: 68px;
`;

export const MainSection = styled.div`
  position: fixed;
  width: 100%;
  background: #ff742b;
  padding: 1rem;
  color: #fff;
  font-weight: bold;
  display: flex;
  align-items: center;
`;

export const InputArea = styled.div`
  width: 100%;
  max-width: 400px;
  padding: 0 1rem;
`;

export const SearchForm = styled.input`
  border: 1px solid #ccc;
  font-size: 16px;
  width: 100%;
  border-radius: 0.25rem;
  padding: 0.5rem;
  outline: 0;
`;

export const SubmitBtn = styled.button`
  padding: 0.5rem;
  background: #fff;
  border: 1px solid #ccc;
  display: flex;
  margin-left: 0.5rem;
  font-size: 16px;
  border-radius: 0.25rem;
`;
