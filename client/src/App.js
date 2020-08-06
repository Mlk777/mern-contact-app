import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

//Components
import PrivateRoute from './components/routing/PrivateRoute';
import Navbar from './components/layout/Navbar';
import Alert from './components/layout/Alert';
import Home from './components/Home';
import Register from './components/auth/Register';
import Login from './components/auth/Login';
import About from './components/About';

//Utils
import setAuthToken from './utils/setAuthToken';

//Redux
import { Provider } from 'react-redux';
import store from './store';

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

const App = () => (
  <Provider store={store}>
    <Router>
      <Navbar />
      <Alert />
      <Switch>
        <PrivateRoute exact path='/' component={Home} />
        <Route path='/about' component={About} />
        <Route path='/signup' component={Register} />
        <Route path='/signin' component={Login} />
      </Switch>
    </Router>
  </Provider>
);

export default App;
