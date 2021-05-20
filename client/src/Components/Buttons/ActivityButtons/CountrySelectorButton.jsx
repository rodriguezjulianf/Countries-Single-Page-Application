import React from 'react';
import { useSelector } from 'react-redux';
import s from '../Buttons.module.css';

function CountrySelectorButton({ handleInputChange }) {
  const countries = useSelector((state) => state.countries);
  return (
    //poner un boton para agregar el pais que tengo en el value
    <div className={`${s.dropdown}`}>
      <label for="country">Country: </label>

      <select
        required
        id="country"
        name="country"
        onChange={(e) => handleInputChange(e)}
      >
        <option value="" disabled selected hidden>
          Please Choose...
        </option>
        {countries.map((country) => (
          <option value={`${country.name}`}>{`${country.name}`}</option>
        ))}
      </select>
    </div>
  );
}

export default CountrySelectorButton;
