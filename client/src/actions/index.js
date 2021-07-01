import axios from 'axios';

export function firstLoad(data) {
  return {
    type: 'firstLoad',
    payload: data,
  };
}

export function changePage(active) {
  return {
    type: 'changePage',
    payload: active,
  };
}

export function searchCountry(country) {
  return {
    type: 'searchCountry',
    payload: country,
  };
}

export function loadCountryPage(country) {
  return {
    type: 'loadCountryPage',
    payload: country,
  };
}

export function filterByRegion(region) {
  return {
    type: 'filterByRegion',
    payload: region,
  };
}

export function filterByActivity(activity) {
  return {
    type: 'filterByActivity',
    payload: activity,
  };
}

export function filterReset() {
  return {
    type: 'filterReset',
  };
}

export function orderAlphabetically() {
  return {
    type: 'orderAlphabetically',
  };
}

export function orderByPopulation() {
  return {
    type: 'orderByPopulation',
  };
}

export function loadActivities(activities) {
  return {
    type: 'loadActivities',
    payload: activities,
  };
}

export function createActivity(activity) {
  return function () {
    axios({
      method: 'post',
      url: `http://localhost:3001/activity`,
      headers: {},
      data: {
        activity: activity, // This is the body part
      },
    });
  };
}

export function fetchCountries() {
  return function (dispatch) {
    axios
      .get(`http://localhost:3001/countries`)
      .then((result) => {
        return result.data;
      })
      .then((data) => {
        dispatch(firstLoad(data));
      })
      .catch((event) => console.log(event));
  };
}

export function fetchCountry(countryName) {
  return function (dispatch) {
    axios
      .get(`http://localhost:3001/countries?name=${countryName}`)
      .then((result) => {
        return result.data;
      })
      .then((data) => {
        dispatch(searchCountry(data));
      })
      .catch((event) => console.log(event));
  };
}

export function fetchCountryByCode(alpha3code) {
  return function (dispatch) {
    axios
      .get(`http://localhost:3001/countries/${alpha3code}`)
      .then((result) => {
        return result.data;
      })
      .then((data) => {
        dispatch(loadCountryPage(data));
      })
      .catch((event) => console.log(event));
  };
}

export function fetchActivities() {
  return function (dispatch) {
    axios
      .get(`http://localhost:3001/activity/`)
      .then((result) => {
        return result.data;
      })
      .then((data) => {
        dispatch(loadActivities(data));
      })
      .catch((event) => console.log(event));
  };
}
