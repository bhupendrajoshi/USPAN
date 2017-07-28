import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import HomeComponent from './components/home';
import ContactUsComponent from './components/contactus';
import RegisterComponent from './components/register';

class App extends Component {
  state = {
    isAuthenticated: false
  }

  onSignUpUsingEmail(userDetails) {
    this.setState({ isAuthenticated: true });
  }

  onSubmitForm = (details) => {
    console.log(details);
  }

  render() {
    return (
      <div className="App">
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
      </div>
    );
  }
}

export default App;
