import React from 'react';
import s from './Buttons.module.css';
import { useDispatch } from 'react-redux';
import { filterByRegion } from '../../actions';

function FilterButton({ setActivePage }) {
  const dispatch = useDispatch();
  return (
    <div className={`${s.dropdown}`}>
      <button className={`${s.dropbtn}`}>Filter by</button>
      <div className={`${s.dropdownContent}`}>
        <a
          href="#"
          onClick={() => {
            dispatch(filterByRegion('Africa'));
            setActivePage(0);
          }}
        >
          Africa
        </a>
        <a
          href="#"
          onClick={() => {
            dispatch(filterByRegion('Americas'));
            setActivePage(0);
          }}
        >
          Americas
        </a>
        <a
          href="#"
          onClick={() => {
            dispatch(filterByRegion('Asia'));
            setActivePage(0);
          }}
        >
          Asia
        </a>
        <a
          href="#"
          onClick={() => {
            dispatch(filterByRegion('Europe'));
            setActivePage(0);
          }}
        >
          Europe
        </a>
        <a
          href="#"
          onClick={() => {
            dispatch(filterByRegion('Oceania'));
            setActivePage(0);
          }}
        >
          Oceania
        </a>
        <a
          href="#"
          onClick={() => {
            dispatch(filterByRegion('Polar'));
            setActivePage(0);
          }}
        >
          Polar
        </a>
      </div>
    </div>
  );
}

export default FilterButton;
