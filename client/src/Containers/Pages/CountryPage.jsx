import React, { useEffect } from 'react';
import MainButton from '../../Components/Buttons/MainButton.jsx';
import { fetchCountryByCode } from '../../actions';
import { useDispatch, useSelector } from 'react-redux';

function CountryPage(props) {
  const countryCode = props.country.slice(props.country.length - 3);
  const dispatch = useDispatch();
  const country = useSelector((state) => state.currentCountryPage);
  useEffect(() => {
    dispatch(fetchCountryByCode(countryCode));
  }, []);
  return (
    <React.Fragment>
      <h1>CountryPage</h1>
      <h2>{country.name}</h2>
      <span>Region: {country.region}</span>
      <span>Capital: {country.capital}</span>
      <span>Subregion: {country.subregion}</span>
      <span>Population: {country.population}</span>
      <span>Area: {country.area}</span>
      <img src={country.flag} alt={country.flag} />
      {/*falta mostrar activities relacionadas*/}
      <MainButton />
    </React.Fragment>
  );
}

export default CountryPage;
