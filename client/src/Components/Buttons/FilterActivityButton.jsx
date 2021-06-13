import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { filterByActivity } from '../../actions';
import s from './Buttons.module.css';

function FilterActivityButton({ setActivePage }) {
  const activities = useSelector((state) => state.activities);
  const dispatch = useDispatch();

  return (
    <div className={`${s.dropdown}`}>
      <button className={`${s.buttons}`}>Filter by activities</button>
      <div className={`${s.dropdownContent}`}>
        {Array.isArray(activities) ? (
          activities.map((activity) => (
            <a
              href="javascript:void(0)"
              onClick={() => {
                dispatch(filterByActivity(activity.name));
                setActivePage(0);
              }}
            >{`${activity.name}`}</a>
          ))
        ) : (
          <a
            href="javascript:void(0)"
            onClick={() => {
              dispatch(filterByActivity(activities.name));
              setActivePage(0);
            }}
          >{`${activities.name}`}</a>
        )}
      </div>
    </div>
  );
}

export default FilterActivityButton;
