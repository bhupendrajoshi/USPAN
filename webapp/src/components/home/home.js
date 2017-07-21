import React from 'react';

class Home extends React.Component {

  constructor(props) {
    super(props);
    this.gotoRoute = this.gotoRoute.bind(this);
  }

  gotoRoute(e, path) {
    e.preventDefault();
    this.props.history.push(path);
  }

  render() {
    return (
      <div>
        <button className="btn register" onClick={event => this.gotoRoute(event, '/register')}>
          Register
        </button>
      </div>
    );
  }
}

export default Home;
