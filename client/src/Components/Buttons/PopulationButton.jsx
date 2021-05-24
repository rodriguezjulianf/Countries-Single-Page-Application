import React, { useState, useEffect } from 'react';
import s from './Buttons.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { orderByPopulation } from '../../actions';

function PopulationButton({ setActivePage }) {
  const [text, setText] = useState('Highest population');
  const dispatch = useDispatch();
  const check = useSelector((state) => state.filteredCountries);

  useEffect(() => {
    if (check[0]?.population > check[2]?.population) {
      setText('Lowest population');
    } else {
      setText('Highest population');
    }
  }, [check]);

  return (
    <button
      className={s.buttons}
      onClick={() => {
        dispatch(orderByPopulation());
        setActivePage(0);
      }}
    >
      {text}
    </button>
  );
}

export default PopulationButton;
