import React from 'react';
import { Router, Switch, Route } from 'react-router-dom';
import { createBrowserHistory } from "history";

import Navbar from './components/Navbar.component';
import Home from './components/Home.component';
import Login from './components//auth/Login.component';
import Register from './components/auth/Register.component';
import CreateBubble from './components/CreateBubble.component';
import BubbleEdit from './components/bubbles/BubbleEdit.component';
import Alerts from './components/Alerts.component';
import PrivateRoute from './components/routing/PrivateRoute.component';
import NotFound from './components/NotFound.Component';

import AuthState from './context/auth/AuthState';
import BubbleState from './context/bubble/BubbleState';
import AlertState from './context/alert/AlertState';
import setAuthToken from './utils/setAuthToken';

if (localStorage.token) {
  setAuthToken(localStorage.token)
}

const history = createBrowserHistory();
const App = () => {
  return (
    <AuthState>
      <BubbleState>
        <AlertState>
          <Router history={history}>
            <Navbar />
            <Alerts />
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/login" component={Login} />
              <Route exact path="/register" component={Register} />
              <PrivateRoute exact path="/create" component={CreateBubble} />
              <PrivateRoute exact path="/bubble/:id" component={BubbleEdit} />
              <Route path='' component={NotFound} />
            </Switch>
          </Router>
        </AlertState>
      </BubbleState>
    </AuthState>

  );
}

export default App;
