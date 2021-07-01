import React from 'react';
import styles from './Buttons.module.css';
import { NavLink } from 'react-router-dom';

export default function MainButton() {
  return (
    <div>
      <NavLink exact to="/countries">
        <button className={styles.buttons}>Home</button>
      </NavLink>
    </div>
  );
}
