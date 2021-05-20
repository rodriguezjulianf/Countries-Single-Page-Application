import './App.css';
import MainPage from './Containers/Pages/MainPage.jsx';
import CountriesPage from './Containers/Pages/CountriesPage.jsx';
import CountryPage from './Containers/Pages/CountryPage.jsx';
import ActivityPage from './Containers/Pages/ActivityPage.jsx';
import { Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Route exact path="/">
        <MainPage />
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
