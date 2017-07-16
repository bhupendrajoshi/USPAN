import React from 'react';
import { Switch, HashRouter, Route } from 'react-router-dom';
import './App.css';
import Home from './components/home/home';
import BuyerHome from './components/buyerhome/buyerhome';
import ManufacturerHome from './components/manufacturerhome/manufacturerhome';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <HashRouter>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/buyers" component={BuyerHome} />
            <Route path="/manufacturers" component={ManufacturerHome} />
          </Switch>
        </HashRouter>
      </div>
    );
  }
}

export default App;
