import React from 'react';
import s from '../Buttons.module.css';

function NameButton({ handleInputChange }) {
  return (
    <div>
      <label for="name">Name: </label>
      <input
        className={`${s.form}`}
        id="name"
        type="text"
        name="name"
        onChange={handleInputChange}
      />
    </div>
  );
}

export default NameButton;
