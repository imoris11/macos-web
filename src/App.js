import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LockScreen from './components/LockScreen';
import './App.css';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={LockScreen} />
      </Switch>
    </Router>
  );
}

export default App;
