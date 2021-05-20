import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createActivity } from '../../actions';
import s from './Forms.module.css';
import NameButton from '../Buttons/ActivityButtons/NameButton.jsx';
import DifficultyButton from '../Buttons/ActivityButtons/DifficultyButton.jsx';
import DurationButton from '../Buttons/ActivityButtons/DurationButton.jsx';
import SeasonButton from '../Buttons/ActivityButtons/SeasonButton.jsx';
import CountrySelectorButton from '../Buttons/ActivityButtons/CountrySelectorButton.jsx';

function ActivityForm() {
  const [input, setInput] = useState({
    name: '',
    duration: '',
    difficulty: '',
    season: '',
    country: [],
  });
  const dispatch = useDispatch();

  const addSelectedCountry = (e) => {
    const newDiv = document.createElement('div');
    newDiv.className = `${s.selectedCountry}`;
    newDiv.innerHTML = `${e.target.value} `;
    newDiv.id = `${e.target.value}`;
    newDiv.addEventListener('click', () => {
      newDiv.remove();
      input.country.splice(
        input.country.indexOf((c) => c === e.target.value),
        1
      );
    });
    document.getElementById('selectedCountries').appendChild(newDiv);
  };

  const handleInputChange = (e) => {
    if (e.target.name !== 'country') {
      setInput({
        ...input,
        [e.target.name]: e.target.value,
      });
    } else {
      if (input.country.indexOf(e.target.value) === -1) {
        input.country.push(e.target.value);
        addSelectedCountry(e);
      }
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('submitted:', input);
    dispatch(createActivity(input));
  };

  return (
    //podria poner boton para despachar y preventDefault asi no se trigerea solo
    <form className={`${s.activityForm}`} onSubmit={handleSubmit}>
      <NameButton handleInputChange={handleInputChange} />
      <DifficultyButton handleInputChange={handleInputChange} />
      <DurationButton handleInputChange={handleInputChange} />
      <SeasonButton handleInputChange={handleInputChange} />
      <CountrySelectorButton handleInputChange={handleInputChange} />
      <div id="selectedCountries" className={`${s.selectedCountries}`}></div>
      <input type="submit" value="Submit" />
    </form>
  );
}

export default ActivityForm;
