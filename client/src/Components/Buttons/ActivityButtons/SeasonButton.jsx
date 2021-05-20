import React from 'react';
import s from '../Buttons.module.css';

function SeasonButton({ handleInputChange }) {
  return (
    <div className={`${s.dropdown}`}>
      <label for="season">Season: </label>

      <select
        required
        id="season"
        name="season"
        onChange={(e) => handleInputChange(e)}
      >
        <option value="" disabled selected hidden>
          Please Choose...
        </option>
        <option value="atumn">Atumn</option>
        <option value="winter">Winter</option>
        <option value="summer">Summer</option>
        <option value="spring">Spring</option>
      </select>
    </div>
  );
}

export default SeasonButton;
