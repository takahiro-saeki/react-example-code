// @flow

import React, { useContext } from 'react';
import Context from '../Context';

const filterTypes = ['all', 'active', 'completed'];

const Footer = () => {
  const { data, leftItems, changeFilter, current, clearComplete } = useContext(
    Context
  );

  if (!data.length) {
    return null;
  }

  return (
    <footer className="footer">
      <span className="todo-count">
        <strong>{leftItems()}</strong> item left
      </span>
      <ul className="filters">
        {filterTypes.map(item => (
          <li key={`filter-${item}`}>
            <a
              className={current === item ? 'selected' : ''}
              href={`#/${item}`}
              onClick={() => changeFilter(item)}
            >
              {item}
            </a>
          </li>
        ))}
      </ul>
      {data.filter(item => item.isChecked === true).length !== 0 && (
        <button
          type="button"
          className="clear-completed"
          onClick={() => clearComplete()}
        >
          Clear completed
        </button>
      )}
    </footer>
  );
};
export default Footer;
