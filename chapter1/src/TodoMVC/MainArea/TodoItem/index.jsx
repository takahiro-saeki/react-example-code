// @flow

import React, { useState, useContext, useRef } from 'react';
import Context from '../../Context';

type Props = {
  data: {
    title: string,
    id: string,
    isChecked: boolean
  }
};

const TodoItem = ({ data }: Props) => {
  const [editing, setEditing] = useState(false);
  const [value, setValue] = useState(data.title);
  const { removeItem, checkItem, updateItem } = useContext(Context);
  const editInputEl = useRef(null);

  const isCheckedItem = item => (item === true ? 'completed' : '');
  const isEditingItem = item => (item === true ? 'editing' : '');

  const invokeCheckItem = async () => {
    await setEditing(true);
    // $FlowFixMe
    await editInputEl.current.focus();
  };

  const invokeBlur = () => {
    setEditing(false);
  };

  const isEnterEditInput = (e, id) => {
    if (e.keyCode === 13) {
      updateItem(value.trim(), id);
      setEditing(false);
    }
  };

  return (
    <li
      className={`${isCheckedItem(data.isChecked)} ${isEditingItem(editing)}`}
      onDoubleClick={invokeCheckItem}
    >
      <div className="view">
        <input
          className="toggle"
          type="checkbox"
          checked={data.isChecked}
          onChange={() => checkItem(data.id)}
        />
        <label>{data.title}</label>
        <button
          type="button"
          className="destroy"
          onClick={() => removeItem(data.id)}
        />
      </div>
      <input
        className="edit"
        type="text"
        value={value}
        onChange={e => setValue(e.target.value)}
        onKeyUp={e => isEnterEditInput(e, data.id)}
        ref={editInputEl}
        onBlur={() => invokeBlur()}
      />
    </li>
  );
};

export default TodoItem;
