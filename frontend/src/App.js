import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Navbar from './components/Navbar.component';
import Home from './components/Home.component';
import Login from './components/Login.component';
import Signup from './components/Signup.component';

import BubbleState from './context/bubble/BubbleState';

const App = () => {
  return (
    <BubbleState>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={Signup} />
        </Switch>
      </Router>
    </BubbleState>
  );
}

export default App;
