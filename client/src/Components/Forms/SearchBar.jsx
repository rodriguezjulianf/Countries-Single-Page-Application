import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { fetchCountry } from '../../actions';
import s from './Forms.module.css';

export default function SearchBar() {
  const [state, setState] = useState('');
  const dispatch = useDispatch();

  return (
    <form
      className={`${s.form}`}
      onSubmit={(e) => {
        e.preventDefault();
        dispatch(fetchCountry(state));
      }}
    >
      <input
        className="searchBar"
        type="text"
        id="navSearch"
        placeholder="Search a country..."
        autoComplete="off"
        onChange={(e) => setState(e.target.value)}
      />
      <button type="submit">Search</button>
    </form>
  );
}
