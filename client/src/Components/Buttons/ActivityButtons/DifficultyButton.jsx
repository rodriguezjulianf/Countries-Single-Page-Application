import React from 'react';
import s from '../Buttons.module.css';

function DifficultyButton({ handleInputChange }) {
  return (
    <div className={`${s.dropdown}`}>
      <label for="difficulty">Difficulty: </label>

      <select
        required
        id="difficulty"
        name="difficulty"
        onChange={(e) => handleInputChange(e)}
      >
        <option value="" disabled selected hidden>
          Please Choose...
        </option>
        <option value={1}>1</option>
        <option value={2}>2</option>
        <option value={3}>3</option>
        <option value={4}>4</option>
        <option value={5}>5</option>
      </select>
    </div>
  );
}

export default DifficultyButton;
