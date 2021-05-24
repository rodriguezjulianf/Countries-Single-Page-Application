import React from 'react';
import MainButton from '../../Components/Buttons/MainButton.jsx';
import ActivityForm from '../../Components/Forms/ActivityForm.jsx';
import s from './Pages.module.css';

function ActivityPage() {
  return (
    <div className={s.activityPage}>
      <MainButton />
      <ActivityForm />
    </div>
  );
}

export default ActivityPage;
