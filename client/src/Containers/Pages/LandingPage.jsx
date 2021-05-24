import React from 'react';
import MainButton from '../../Components/Buttons/MainButton.jsx';
import s from './Pages.module.css';

function LandingPage() {
  return (
    <div className={`${s.landingPage}`}>
      <span className={`${s.landingTitleAndButton}`}>
        <h1 className={`${s.landingTitle}`}>Henry Countries</h1>
        <MainButton />
      </span>
    </div>
  );
}

export default LandingPage;
