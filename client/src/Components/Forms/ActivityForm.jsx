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

  const handleDelete = (country) => {
    setInput({
      ...input,
      country: [...input.country].filter((c) => c !== country),
    });
  };

  const handleInputChange = (e) => {
    if (e.target.name !== 'country') {
      setInput({
        ...input,
        [e.target.name]: e.target.value,
      });
    } else {
      if (input.country.indexOf(e.target.value) === -1) {
        const countries = input.country;
        countries.push(e.target.value);
        setInput({
          ...input,
          country: countries,
        });
      }
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('submitted:', input);
    dispatch(createActivity(input));
  };

  return (
    <form className={`${s.activityForm}`} onSubmit={handleSubmit}>
      <span className={`${s.inputs}`}>
        <NameButton handleInputChange={handleInputChange} />
        <DifficultyButton handleInputChange={handleInputChange} />
        <DurationButton handleInputChange={handleInputChange} />
        <SeasonButton handleInputChange={handleInputChange} />
        <CountrySelectorButton handleInputChange={handleInputChange} />
        <div id="selectedCountries" className={`${s.selectedCountries}`}>
          {input.country.length >= 1 ? (
            input.country.map((country) => (
              <div
                onClick={() => {
                  handleDelete(country);
                }}
              >
                {country}
              </div>
            ))
          ) : (
            <div>No country selected</div>
          )}
        </div>
      </span>
      <input className={`${s.submit}`} type="submit" value="Submit" />
    </form>
  );
}

export default ActivityForm;
