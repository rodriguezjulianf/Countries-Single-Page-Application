import React from 'react';
import styles from './Buttons.module.css';
import { useDispatch } from 'react-redux';
import { filterReset } from '../../actions';

function ResetFilterButton({ setActivePage }) {
  const dispatch = useDispatch();
  return (
    <button
      className={styles.buttons}
      onClick={() => {
        dispatch(filterReset());
        setActivePage(0);
        window.scrollTo(0, 0);
      }}
    >
      Remove Filter
    </button>
  );
}

export default ResetFilterButton;
