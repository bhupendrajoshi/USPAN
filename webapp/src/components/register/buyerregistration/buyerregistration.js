import React from 'react';
import base from '../../../configuration/firebase';
import firebase from 'firebase';

class Registration extends React.Component {

  constructor(props) {
    super(props);
    this.state = {};
    this.authenticateWithFacebook = this.authenticateWithFacebook.bind(this);
    this.authenticateWithEmail = this.authenticateWithEmail.bind(this);
  }

  authenticateWithFacebook() {
    const provider = new firebase.auth.FacebookAuthProvider();
    base.auth().signInWithPopup(provider).then((result) => {
      console.log(result);
      this.setState({
        user: result,
      });
    })
      .catch((err) => {
        console.log(err);
      });
  }

  authenticateWithEmail() {
    firebase.auth().createUserWithEmailAndPassword('bhupendra.joshi@gmail.com', '123456')
      .then((result) => {
        console.log(result);
        this.setState({
          user: result,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    return (
      <div>
        <h3 className="title">Buyer Registration</h3>
        <button className="facebook-auth" onClick={() => this.authenticateWithFacebook()}>Facebook</button>
        <button className="email-auth" onClick={() => this.authenticateWithEmail()}>Email</button>
      </div>
    );
  }
}

export default Registration;
