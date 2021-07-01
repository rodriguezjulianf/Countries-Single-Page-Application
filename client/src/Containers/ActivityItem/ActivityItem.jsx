import React from 'react';
import s from './ActivityItem.module.css';

function ActivityItem(props) {
  return (
    <div className={`${s.activityItem}`}>
      <span className={`${s.activityItem1}`}> {props.name} </span>
      <span className={`${s.activityItem2}`}> {props.difficulty}/5 </span>
      <span className={`${s.activityItem3}`}> {props.duration} hours</span>
      <span className={`${s.activityItem4}`}> {props.season} </span>
    </div>
  );
}

export default ActivityItem;
