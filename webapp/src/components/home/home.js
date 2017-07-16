import React from 'react';

class Home extends React.Component {
  
  constructor(props) {
    super(props)
    this.gotoRoute = this.gotoRoute.bind(this)
  }

  gotoRoute (e, path) {
    e.preventDefault();
    this.props.history.push(path);
  }

  render() {
    return (
      <div>
          <button className="btn buyer" onClick={(event) => this.gotoRoute(event, '/buyers')}>
            Buyers
          </button>
          <button className="btn manufacturer" onClick={(event) => this.gotoRoute(event, '/manufacturers')}>
            Manufacturers
          </button>
      </div>
    );
  }
};

export default Home;
