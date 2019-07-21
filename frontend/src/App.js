import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Navbar from './components/Navbar.component';
import Home from './components/Home.component';
import Login from './components/Login.component';
import Signup from './components/Signup.component';
import CreateBubble from './components/CreateBubble.component';
import BubbleState from './context/bubble/BubbleState';
import BubbleEdit from './components/bubbles/BubbleEdit.component';

const App = () => {
  return (
    <BubbleState>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/create" component={CreateBubble} />
          <Route exact path="/bubble/:id" component={BubbleEdit} />
        </Switch>
      </Router>
    </BubbleState>
  );
}

export default App;
