import Navbar from './Navbar';
import SearchBox from './SearchBox';
import SearchResults from './SearchResults';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { useState } from 'react';

function App() {
  const [username, setUsername] = useState('');
  const [selectedPlatform, setSelectedPlatform] = useState('battle');

  return (
    <div>
      <Router basename={process.env.PUBLIC_URL}>
        <Navbar />
        <Switch>
          <Route exact path="/platforms/:platform/usernames/:username">
            <SearchResults />
          </Route>
          <Route path="/">
            <SearchBox
              username={username}
              setUsername={setUsername}
              selectedPlatform={selectedPlatform}
              setSelectedPlatform={setSelectedPlatform}
            />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
