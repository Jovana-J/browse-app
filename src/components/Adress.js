import React, { Component } from "react";
import GlobalContext from "./context/GlobalContext";

class Adress extends Component {
  constructor(props) {
    super(props);
    this.state = {
      AdressInput: "",
    };
    this.handleChange = this.handleChange.bind(this);
  }
  static contextType = GlobalContext;
  handleChange(event) {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  }
  render() {
    return (
      <div className="AdressPage">
        <div className="Adress">
          <div className="AdressTitle">
            Get Ether Balance for a single Address
          </div>
          <div className="AdressBalanceWrapper">
          <div
            className="AdressBalance"
            style={{ display: this.context.adressPage.etherBalance ? "flex" : "none"}}
          >
            Ether Balance
            <span className="AdressBalanceNu">
              &nbsp;{this.context.adressPage.etherBalance}&nbsp;
            </span>
          </div></div>
          <input
            type="text"
            placeholder="Browse by Adress"
            name="AdressInput"
            onChange={this.handleChange}
            className="AdressInput"
          ></input>
          <button
            className="AdressInputButton"
            onClick={() =>
              this.context.adressPage.getAdress(this.state.AdressInput)
            }
          >
            Browse
          </button>
        </div>
      </div>
    );
  }
}

export default Adress;
