import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LoginPage from './LoginPage';
import HomePage from './HomePage';
import NewContactPage from './NewContactPage';

function App() {
  return (
    <Router>
      <Switch>
      <Route exact path="/" component={LoginPage} />
      <Route path="/HomePage" component={HomePage} />
      <Route path="/new-contact" component={NewContactPage} />
      </Switch>
    </Router>
  );
}

export default App;