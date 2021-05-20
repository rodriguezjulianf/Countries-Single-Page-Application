import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCountries, changePage } from '../../actions';
import ListItem from '../../Containers/ListItem/ListItem.jsx';
import NextButton from '../Buttons/NextButton.jsx';
import PrevButton from '../Buttons/PrevButton.jsx';
import FilterButton from '../Buttons/FilterButton.jsx';
import ResetFilterButton from '../Buttons/ResetFilterButton.jsx';
import s from './CountryList.module.css';

export default function CountryList() {
  const [activePage, setActivePage] = useState(0);
  const dispatch = useDispatch();
  const countries = useSelector((state) => state.activeCountries);
  const check = useSelector((state) => state.countries);

  useEffect(() => {
    dispatch(fetchCountries());
  }, []);

  useEffect(() => {
    if (check[0]) {
      dispatch(changePage(activePage));
    }
  }, [activePage, check, dispatch]);

  return (
    <div>
      <h1>CountryList</h1>
      <PrevButton setActivePage={setActivePage} />
      <NextButton setActivePage={setActivePage} />
      <FilterButton setActivePage={setActivePage} />
      <ResetFilterButton setActivePage={setActivePage} />
      <div className={`${s.countryList}`}>
        {Array.isArray(countries) ? (
          countries.map((country) => (
            <NavLink exact to={`/countries/${country.alpha3code}`}>
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
      <NextButton setActivePage={setActivePage} />
    </div>
  );
}
