// @flow

import React from 'react';
import { MainArea, TextInput, ErrorMsg } from './style';

type Props = {
  minRange: number,
  maxRange: number,
  result?: number,
  invoke: () => void,
  formChange: () => void,
  errorMsg: string,
  title: string
};

const NumberField = ({
  minRange,
  maxRange,
  result,
  invoke,
  formChange,
  errorMsg,
  title
}: Props) => (
  <div>
    <h1>{title}</h1>
    <div>result is: {result}</div>
    <MainArea>
      <TextInput
        value={minRange}
        onChange={e => formChange({ type: 'min-range', value: e.target.value })}
      />
      <div>〜</div>
      <TextInput
        value={maxRange}
        onChange={e => formChange({ type: 'max-range', value: e.target.value })}
      />
    </MainArea>
    <button type="button" onClick={invoke}>
      Submit
    </button>
    {errorMsg && <ErrorMsg>{errorMsg}</ErrorMsg>}
  </div>
);

NumberField.defaultProps = {
  result: 0
};

export default NumberField;
