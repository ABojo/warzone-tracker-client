import Navbar from './Navbar';
import SearchBox from './SearchBox';
import ProfileBox from './ProfileBox';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/platforms/:platform/usernames/:username">
            <ProfileBox />
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
