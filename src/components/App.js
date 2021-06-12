import Navbar from './Navbar';
import SearchBox from './SearchBox';
import ProfileBox from './ProfileBox';
import Container from './Container';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/platforms/:platform/usernames/:username">
            <Container>
              <ProfileBox />
            </Container>
          </Route>
          <Route path="/">
            <Container>
              <SearchBox />
            </Container>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
