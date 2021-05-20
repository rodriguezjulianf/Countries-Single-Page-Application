import React from 'react';
import styles from '../Buttons.module.css';
import { NavLink } from 'react-router-dom';

function ActivityButton() {
  return (
    <div>
      <NavLink exact to="/activity">
        <button className={styles.buttons}>Add activity</button>
      </NavLink>
    </div>
  );
}

export default ActivityButton;
