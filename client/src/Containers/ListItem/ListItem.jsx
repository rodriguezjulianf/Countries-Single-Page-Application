import React from 'react';
import s from './ListItem.module.css';

function ListItem(props) {
  return (
    <div className={`${s.listItem}`}>
      <span className={`${s.countryName}`}>{props.name}</span>
      <span className={`${s.countryRegion}`}>{props.region}</span>
      <img
        className={`${s.countryFlag}`}
        src={props.flag}
        alt={`${s.countryFlag}`}
      />
    </div>
  );
}

export default ListItem;
