import React from 'react';
import styles from './Buttons.module.css';
import { useSelector } from 'react-redux';

function NextButton({ setActivePage }) {
  const limitCheck = useSelector((state) => state.filteredCountries);

  return (
    <button
      className={styles.buttons}
      onClick={() => {
        setActivePage((prev) => {
          if (limitCheck[0]) {
            return (prev + 1) * 10 < limitCheck.length - 1 ? prev + 1 : prev;
          }
          return prev < 24 ? prev + 1 : prev;
        });
        window.scrollTo({
          top: 100,
          left: 100,
          behavior: 'smooth',
        });
      }}
    >
      Next
    </button>
  );
}

export default NextButton;
