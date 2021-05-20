const initialState = {
  countries: [],
  activeCountries: [],
  filteredCountries: [],
  currentCountryPage: [],
};

export default function rootReducer(state = initialState, action) {
  switch (action.type) {
    case 'firstLoad':
      return { ...state, countries: action.payload };
    case 'changePage':
      if (state.filteredCountries[0]) {
        return {
          ...state,
          activeCountries: state.filteredCountries.slice(
            action.payload * 10,
            (action.payload + 1) * 10
          ),
        };
      }
      return {
        ...state,
        activeCountries: state.countries.slice(
          action.payload * 10,
          (action.payload + 1) * 10
        ),
      };
    case 'searchCountry':
      return { ...state, activeCountries: action.payload };
    case 'loadCountryPage':
      return { ...state, currentCountryPage: action.payload };
    case 'filterByRegion':
      state.filteredCountries = state.countries.filter(
        (country) => country.region === action.payload
      );
      return {
        ...state,
        activeCountries: state.filteredCountries.slice(0, 10),
      };
    case 'filterReset':
      state.filteredCountries = [];
      return {
        ...state,
        activeCountries: state.countries.slice(0, 10),
      };
    default:
      return state;
  }
}
