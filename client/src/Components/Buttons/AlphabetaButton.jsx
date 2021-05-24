import React, { useState, useEffect } from 'react';
import s from './Buttons.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { orderAlphabetically } from '../../actions';

function AlphabetaButton({ setActivePage }) {
  const [text, setText] = useState('Descendant (Z>A)');
  const dispatch = useDispatch();
  const check = useSelector((state) => state.filteredCountries);

  useEffect(() => {
    if (check[0]?.name > check[1]?.name) {
      setText('Ascendant (A>Z)');
    } else {
      setText('Descendant (Z>A)');
    }
  }, [check]);

  return (
    <button
      className={s.buttons}
      onClick={() => {
        dispatch(orderAlphabetically());
        setActivePage(0);
      }}
    >
      {text ? text : setText('Descendant (Z>A)')}
    </button>
  );
}

export default AlphabetaButton;
