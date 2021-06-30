import './App.css';
import { LandingPage, CountriesPage, CountryPage, ActivityPage } from './Containers/Pages/';
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
