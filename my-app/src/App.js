import { Fragment } from 'react';
import './App.css';
import Home from './home';
import BugTracker from './bugTracker';
import Projects from './projects';
import User from './context-demo/User';

import { Link, Switch, Route } from 'react-router-dom';
function App() {
  return (
    <User>
      <div>
        <span> [ <Link to="/">Home</Link> ] </span>
        <span> [ <Link to="/bugs">Bugs</Link> ] </span>
        <span> [ <Link to="/projects">Projects</Link> ] </span>
      </div>
      <hr/>
      <Switch>
        <Route path="/bugs">
          <BugTracker/>
        </Route>
        <Route path="/projects">
          <Projects/>
        </Route>
        <Route path="/">
          <Home/>
        </Route>
      </Switch>
    </User>
  );
}

export default App;