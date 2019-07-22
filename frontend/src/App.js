import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Navbar from './components/Navbar.component';
import Home from './components/Home.component';
import Login from './components//auth/Login.component';
import Register from './components/auth/Register.component';
import CreateBubble from './components/CreateBubble.component';
import BubbleEdit from './components/bubbles/BubbleEdit.component';
import Alerts from './components/Alerts.component';
import AuthState from './context/auth/AuthState';
import BubbleState from './context/bubble/BubbleState';
import AlertState from './context/alert/AlertState';

const App = () => {
  return (
    <AuthState>
      <BubbleState>
        <AlertState>
          <Router>
            <Navbar />
            <Alerts />
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/login" component={Login} />
              <Route exact path="/register" component={Register} />
              <Route exact path="/create" component={CreateBubble} />
              <Route exact path="/bubble/:id" component={BubbleEdit} />
            </Switch>
          </Router>
        </AlertState>
      </BubbleState>
    </AuthState>

  );
}

export default App;
