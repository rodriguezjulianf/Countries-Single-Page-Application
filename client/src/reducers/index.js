const initialState = {
  countries: [],
  activeCountries: [],
  filteredCountries: [],
  currentCountryPage: [],
  activities: [],
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
    case 'loadActivities':
      return { ...state, activities: action.payload };
    case 'filterByRegion':
      state.filteredCountries = state.countries.filter(
        (country) => country.region === action.payload
      );
      return {
        ...state,
        activeCountries: state.filteredCountries.slice(0, 10),
      };
    case 'filterByActivity':
      state.filteredCountries = [];
      state.activities
        .find((a) => a.name === action.payload)
        .countries.forEach((country) => state.filteredCountries.push(country));
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
    case 'orderAlphabetically':
      var arr = [];
      if (state.countries[0].name < state.countries[1].name) {
        if (state.filteredCountries[0]) {
          arr = [...state.filteredCountries];
          state.filteredCountries = arr.sort((a, b) => b - a);
        } else {
          arr = [...state.countries];
          state.filteredCountries = arr.sort((a, b) => b - a);
        }
        return {
          ...state,
          activeCountries: state.filteredCountries.slice(0, 10),
        };
      }
      if (state.filteredCountries[0]) {
        arr = [...state.filteredCountries];
        state.filteredCountries = arr.sort((a, b) => a - b);
      }
      return {
        ...state,
        activeCountries: state.filteredCountries.slice(0, 10),
      };
    case 'orderByPopulation':
      if (
        state.filteredCountries[0]?.population <
        state.filteredCountries[2]?.population
      ) {
        if (state.filteredCountries[0]) {
          arr = [...state.filteredCountries];
          state.filteredCountries = arr.sort(
            (a, b) => b.population - a.population
          );
        }
        return {
          ...state,
          activeCountries: state.filteredCountries.slice(0, 10),
        };
      }
      if (state.filteredCountries[0]) {
        arr = [...state.filteredCountries];
        state.filteredCountries = arr.sort(
          (a, b) => a.population - b.population
        );
      } else {
        arr = [...state.countries];
        state.filteredCountries = arr.sort(
          (a, b) => a.population - b.population
        );
      }
      return {
        ...state,
        activeCountries: state.filteredCountries.slice(0, 10),
      };

    default:
      return state;
  }
}
