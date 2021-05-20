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
        window.scrollTo(0, 0);
      }}
    >
      Prev
    </button>
  );
}

export default PrevButton;
