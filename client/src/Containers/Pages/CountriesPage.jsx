import React from 'react';
import NavBar from '../NavBar/NavBar.jsx';
import CountryList from '../../Components/CountryList/CountryList.jsx';
import s from './Pages.module.css';

export default function CountriesPage() {
  return (
    <div className={s.countriesPage}>
      <NavBar />
      <CountryList />
    </div>
  );
}
