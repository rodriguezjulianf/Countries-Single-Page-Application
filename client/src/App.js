import './App.css';
import LandingPage from './Containers/Pages/LandingPage.jsx';
import CountriesPage from './Containers/Pages/CountriesPage.jsx';
import CountryPage from './Containers/Pages/CountryPage.jsx';
import ActivityPage from './Containers/Pages/ActivityPage.jsx';
import { Route } from 'react-router-dom';

function App() {
  return (
    <div>
      <Route exact path="/">
        <LandingPage />
      </Route>
      <Route exact path="/countries">
        <CountriesPage />
      </Route>
      <Route
        path="/countries/:alpha3code"
        render={(props) => <CountryPage country={props.match.url} />}
      />
      <Route exact path="/activity">
        <ActivityPage />
      </Route>
    </div>
  );
}

export default App;
