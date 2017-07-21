import React from 'react';

class Registration extends React.Component {

  constructor(props) {
    super(props);
    this.state = {};
    this.gotoRoute = this.gotoRoute.bind(this);
    this.onBuyerSelected = this.onBuyerSelected.bind(this);
    this.onManufacturerSelected = this.onManufacturerSelected.bind(this);
  }

  onBuyerSelected(e) {
    this.setState({
      selectedUserType: e.currentTarget.value,
    });
  }

  onManufacturerSelected(e) {
    this.setState({
      selectedUserType: e.currentTarget.value,
    });
  }

  gotoRoute(e) {
    e.preventDefault();
    if (this.state.selectedUserType === 'Buyer') {
      this.props.history.push('buyerregistration');
    }
    if (this.state.selectedUserType === 'Manufacturer') {
      this.props.history.push('manufacturerregistration');
    }
  }

  render() {
    return (
      <div>
        <h3 className="title">Registration</h3>
        <input className="buyer" type="radio" name="usertype" value="Buyer" onChange={this.onBuyerSelected} />Buyer<br />
        <input className="manufacturer" type="radio" name="usertype" value="Manufacturer" onChange={this.onManufacturerSelected} />Manufacturer<br />
        <button className="submit" onClick={event => this.gotoRoute(event)}>Next</button>
      </div>
    );
  }
}

export default Registration;
