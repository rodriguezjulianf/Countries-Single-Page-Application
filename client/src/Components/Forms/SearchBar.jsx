import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { fetchCountry } from '../../actions';
import styles from './Forms.module.css';
import s from '../Buttons/Buttons.module.css';

export default function SearchBar() {
  const [state, setState] = useState('');
  const dispatch = useDispatch();

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        dispatch(fetchCountry(state));
      }}
    >
      <input
        className={`${styles.searchBar}`}
        type="text"
        id="navSearch"
        placeholder="Search a country..."
        autoComplete="off"
        onChange={(e) => setState(e.target.value)}
      />
      <button className={`${s.buttons}`} type="submit">
        Search
      </button>
    </form>
  );
}
