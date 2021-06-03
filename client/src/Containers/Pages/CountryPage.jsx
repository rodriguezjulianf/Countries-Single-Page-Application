import React, { useEffect } from 'react';
import ActivityItem from '../ActivityItem/ActivityItem.jsx';
import MainButton from '../../Components/Buttons/MainButton.jsx';
import { fetchCountryByCode } from '../../actions';
import { useDispatch, useSelector } from 'react-redux';
import s from './CountryPage.module.css';

function CountryPage(props) {
  const countryCode = props.country.slice(props.country.length - 3);
  const dispatch = useDispatch();
  const country = useSelector((state) => state.currentCountryPage);
  const activities = useSelector((state) => state.activities);
  useEffect(() => {
    dispatch(fetchCountryByCode(countryCode));
    window.scrollTo(0, 0);
  }, [countryCode, dispatch]);

  return (
    <div className={`${s.countryPage}`}>
      <h1 className={`${s.countryName}`}>{country.name}</h1>
      <div className={`${s.countryData}`}>
        <div className={`${s.countryTextData}`}>
          <span>Region: {country.region}</span>
          <span>Capital: {country.capital}</span>
          <span>Subregion: {country.subregion}</span>
          <span>Population: {country.population}</span>
          <span>Area: {country.area} km2</span>
        </div>
        <img
          src={country.flag}
          alt={country.flag}
          className={`${s.countryFlag}`}
        />
        <div className={`${s.countryActivitiesChart}`}>
          <span>Activity:</span>
          <span>Difficulty:</span>
          <span>Duration:</span>
          <span>Season:</span>
        </div>
        <div className={`${s.countryActivities}`}>
          {Array.isArray(activities)
            ? activities.map((a) => {
                if (
                  a.countries.filter((c) => c.name === country.name).length > 0
                ) {
                  return (
                    <ActivityItem
                      name={a.name || activities.name}
                      difficulty={a.difficulty || activities.difficulty}
                      duration={a.duration || activities.duration}
                      season={a.season || activities.season}
                    />
                  );
                }
              })
            : null}
        </div>
        <div className={s.mainButton}>
          <MainButton />
        </div>
      </div>
    </div>
  );
}

export default CountryPage;
