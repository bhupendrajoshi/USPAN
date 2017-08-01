import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';

import HomeComponent from './components/home';
import ContactUsComponent from './components/contactus';
import SignInComponent from './components/signin';
import RegisterComponent from './components/registration/register';
import BuyerRegistrationComponent from './components/registration/buyerregistration';
import ManufacturerRegistrationComponent from './components/registration/maufacturerregistration';

import database from './configuration/firebase';

class App extends Component {
  state = {
    isAuthenticated: false
  }

  onSignUpUsingEmail(userDetails) {
    this.setState({ isAuthenticated: true });
  }

  onSubmitForm = (details) => {
    database.database().ref('requests').push(details);
  }

  render() {
    return (
      <div>
        <Route exact path='/' render={() => (
          <HomeComponent
            isAuthenticated={this.state.isAuthenticated}
            signUpEmail={(userDetails) => this.onSignUpUsingEmail(userDetails)}
          />
        )} />

        <Route exact path='/contactus' render={({ history }) => (
          <ContactUsComponent submitForm={(details) => {
            this.onSubmitForm(details);
            history.push('/');
          }} />
        )} />

        <Route exact path='/register' component={RegisterComponent} />
        <Route exact path='/signin' component={SignInComponent} />
        <Route exact path='/register/buyerregistration' component={BuyerRegistrationComponent} />
        <Route exact path='/register/manufacturerregistration' component={ManufacturerRegistrationComponent} />

        <footer>
          <Link to='/contactus'>Contact us</Link>
          <Link to='/aboutus'>About us</Link>
        </footer>
      </div>
    );
  }
}

export default App;
