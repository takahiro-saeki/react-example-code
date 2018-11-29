import React from 'react';
import ToggleHelper from './ToggleHelper';

const RenderProps = () => (
  <ToggleHelper init>
    {({ toggle, changeToggle }) => (
      <div>
        <div onClick={() => console.log(toggle)}>test</div>
        <div onClick={changeToggle}>change toggle</div>
      </div>
    )}
  </ToggleHelper>
);

export default RenderProps;
