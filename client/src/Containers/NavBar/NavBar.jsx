import React from 'react';
import SearchBar from '../../Components/Forms/SearchBar.jsx';
import ActivityButton from '../../Components/Buttons/ActivityButtons/ActivityButton.jsx';
import LandingButton from '../../Components/Buttons/LandingButton.jsx';
import s from './NavBar.module.css';

function NavBar() {
  return (
    <div className={`${s.navBar}`}>
      <LandingButton />
      <SearchBar />
      <ActivityButton />
    </div>
  );
}

export default NavBar;
