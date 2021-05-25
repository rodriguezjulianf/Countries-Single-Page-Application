import React from 'react';
import MainButton from '../../Components/Buttons/MainButton.jsx';
import s from './Pages.module.css';

function LandingPage() {
  return (
    <div className={`${s.landingPage}`}>
      <span className={`${s.landingTitleAndButton}`}>
        <h1 className={`${s.landingTitle1}`}>Welcome to</h1>
        <h1 className={`${s.landingTitle2}`}>Henry Countries</h1>
        <MainButton />
      </span>
      <h5 className={`${s.landingTitle3}`}>
        made by Julian Federico Rodriguez
      </h5>
    </div>
  );
}

export default LandingPage;
