import React from 'react';
import s from '../Buttons.module.css';

function NameButton({ handleInputChange }) {
  return (
    <>
      <label>Name: </label>
      <input
        className={`${s.form}`}
        type="text"
        name="name"
        onChange={handleInputChange}
      />
    </>
  );
}

export default NameButton;
