import React from 'react';
import NavBar from '../NavBar/NavBar.jsx';
import CountryList from '../../Components/CountryList/CountryList.jsx';
import s from './Pages.module.css';

export default function CountriesPage() {
  return (
    <React.Fragment>
      <div className={`${s.upperZone}`}>
        <NavBar />
      </div>
      <CountryList />
    </React.Fragment>
  );
}
