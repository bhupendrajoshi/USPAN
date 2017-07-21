import React from 'react';
import { Switch, HashRouter, Route } from 'react-router-dom';
import './App.css';
import Home from './components/home/home';
import Registration from './components/register/registration';
import BuyerRegistration from './components/register/buyerregistration/buyerregistration';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <HashRouter>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/register" component={Registration} />
            <Route path="/buyerregistration" component={BuyerRegistration} />
          </Switch>
        </HashRouter>
      </div>
    );
  }
}

export default App;
