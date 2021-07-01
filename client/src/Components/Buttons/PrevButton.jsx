import React from 'react';
import styles from './Buttons.module.css';
function PrevButton({ setActivePage }) {
  return (
    <button
      className={styles.buttons}
      onClick={() => {
        setActivePage((prev) => {
          return prev > 0 ? prev - 1 : prev;
        });
        window.scrollTo({
          top: 100,
          left: 100,
          behavior: 'smooth',
        });
      }}
    >
      Prev
    </button>
  );
}

export default PrevButton;
