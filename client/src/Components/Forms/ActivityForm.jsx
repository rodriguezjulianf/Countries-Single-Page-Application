import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createActivity } from '../../actions';
import s from './Forms.module.css';
import buttonStyle from '../Buttons/Buttons.module.css';
import { NameInput, DifficultySelectorButton, DurationInput, SeasonSelectorButton, CountrySelectorButton } from '../Buttons/ActivityButtons/';

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
    dispatch(createActivity(input));
    window.alert('Activity created successfully');
  };

  return (
    <form className={`${s.activityForm}`} onSubmit={handleSubmit}>
      <span className={`${s.inputs}`}>
        <NameInput handleInputChange={handleInputChange} />
        <DifficultySelectorButton handleInputChange={handleInputChange} />
        <DurationInput handleInputChange={handleInputChange} />
        <SeasonSelectorButton handleInputChange={handleInputChange} />
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
      <input className={`${buttonStyle.buttons} ${s.submit} `} type="submit" value="Submit" />
    </form>
  );
}

export default ActivityForm;
