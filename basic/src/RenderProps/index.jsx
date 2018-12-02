import React from 'react';
import ToggleHelper from './ToggleHelper';

const RenderProps = () => (
  <ToggleHelper init>
    {({ toggle, changeToggle }) => (
      <div>
        <div>condition: {toggle ? 'true' : 'false'}</div>
        <button type="button" onClick={changeToggle}>
          change toggle
        </button>
      </div>
    )}
  </ToggleHelper>
);

export default RenderProps;
