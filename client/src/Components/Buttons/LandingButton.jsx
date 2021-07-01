import React from 'react';
import styles from './Buttons.module.css';
import { NavLink } from 'react-router-dom';

function LandingButton() {
  return (
    <div>
      <NavLink exact to="/">
        <button className={styles.buttons}>Landing page</button>
      </NavLink>
    </div>
  );
}

export default LandingButton;
