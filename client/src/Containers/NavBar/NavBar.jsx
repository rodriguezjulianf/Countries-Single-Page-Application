import React from 'react';
import SearchBar from '../../Components/Forms/SearchBar.jsx';
import ActivityButton from '../../Components/Buttons/ActivityButtons/ActivityButton.jsx';

function NavBar() {
  return (
    <div className="NavBar">
      <h1>NavBar</h1>
      <SearchBar />
      <ActivityButton />
    </div>
  );
}

export default NavBar;
