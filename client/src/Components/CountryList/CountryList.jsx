import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCountries, fetchActivities, changePage } from '../../actions';
import ListItem from '../../Containers/ListItem/ListItem.jsx';
import NextButton from '../Buttons/NextButton.jsx';
import PrevButton from '../Buttons/PrevButton.jsx';
import FilterButton from '../Buttons/FilterButton.jsx';
import FilterActivityButton from '../Buttons/FilterActivityButton.jsx';
import ResetFilterButton from '../Buttons/ResetFilterButton.jsx';
import AlphabetaButton from '../Buttons/AlphabetaButton.jsx';
import PopulationButton from '../Buttons/PopulationButton.jsx';
import s from './CountryList.module.css';

export default function CountryList() {
  const [activePage, setActivePage] = useState(0);
  const dispatch = useDispatch();
  const countries = useSelector((state) => state.activeCountries);
  const check = useSelector((state) => state.countries);

  useEffect(() => {
    dispatch(fetchCountries());
    dispatch(fetchActivities());
  }, [dispatch]);

  useEffect(() => {
    if (check[0]) {
      dispatch(changePage(activePage));
    }
  }, [activePage, check, dispatch]);

  return (
    <div className={`${s.countryList}`}>
      <div className={`${s.titleWrap}`}>
        <h1 className={`${s.title}`}>Henry Countries</h1>
      </div>
      <div className={`${s.buttons}`}>
        <span className={`${s.filterButtons}`}>
          <FilterButton setActivePage={setActivePage} />
          <FilterActivityButton setActivePage={setActivePage} />
          <ResetFilterButton setActivePage={setActivePage} />
          <AlphabetaButton setActivePage={setActivePage} />
          <PopulationButton setActivePage={setActivePage} />
        </span>
      </div>
      <section className={`${s.pageButtonsAndMapWrapper}`}>
        <PrevButton setActivePage={setActivePage} />
        {countries.length === 10 ? (
          <span className={`${s.pageButtons}`}>
            <NextButton setActivePage={setActivePage} />
          </span>
        ) : null}
        <div className={`${s.countryMap}`}>
          {Array.isArray(countries) ? (
            countries.map((country) => (
              <NavLink
                exact
                to={`/countries/${country.alpha3code}`}
                style={{ textDecoration: 'none' }}
              >
                <ListItem
                  key={country.id}
                  name={country.name}
                  flag={country.flag}
                  region={country.region}
                />
              </NavLink>
            ))
          ) : (
            <NavLink exact to={`/countries/${countries.alpha3code}`}>
              <ListItem
                key={countries.id}
                name={countries.name}
                flag={countries.flag}
                region={countries.region}
              />
            </NavLink>
          )}
        </div>
        <PrevButton setActivePage={setActivePage} />
        {countries.length === 10 ? (
          <span className={`${s.pageButtons}`}>
            <NextButton setActivePage={setActivePage} />
          </span>
        ) : null}
      </section>
    </div>
  );
}
