import Navbar from './Navbar';
import SearchBox from './SearchBox';
import SearchResults from './SearchResults';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/platforms/:platform/usernames/:username">
            <SearchResults />
          </Route>
          <Route path="/">
            <SearchBox />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
