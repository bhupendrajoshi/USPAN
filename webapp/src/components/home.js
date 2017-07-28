import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class HomeComponent extends Component {

  render() {
    return (
      <div>
        <Link to='register'>Sign-In</Link>
        <button>Register</button>

        <Link to='/contactus'>Contact us</Link>
      </div>
    );
  }
}

export default HomeComponent;