import React, { useState, useContext, useRef } from 'react';
import Context from '../../Context';

const TodoItem = ({ data }) => {
  const [editing, setEditing] = useState(false);
  const [value, setValue] = useState('');
  const { removeItem, checkItem } = useContext(Context);
  const editInputEl = useRef(null);

  const isCheckedItem = item => (item === true ? 'completed' : '');
  const isEditingItem = item => (item === true ? 'editing' : '');

  //const invokeCheckItem = () =>

  return (
    <li
      className={`${isCheckedItem(data.isChecked)} ${isEditingItem(editing)}`}
      onDoubleClick={() => setEditing(true)}
    >
      <div className="view">
        <input
          className="toggle"
          type="checkbox"
          checked={data.isChecked}
          onChange={() => checkItem(data.id)}
        />
        <label>{data.title}</label>
        <button className="destroy" onClick={() => removeItem(data.id)} />
      </div>
      <input
        className="edit"
        value={value}
        onChange={e => setValue(e.target.value)}
      />
    </li>
  );
};

export default TodoItem;
