import React, { Component } from "react";
import GlobalContext from "./context/GlobalContext";
import { NavLink } from "react-router-dom";

class Block extends Component {
  constructor(props) {
    super(props);
    this.state = {
      BlockInput: "",
    };
    this.handleChange = this.handleChange.bind(this);
  }
  static contextType = GlobalContext;
  handleChange(event) {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  }
  render() {
    return (
      <div className="BlockPage">
        <div
          className="Block"
        >
          <div className="BlockTitle">Number of the most recent Block</div>
          <div className="BlockNumber" style={{ display: this.context.blockPage.eth_blockNumber === undefined ? "none" : "flex"}}>
            <span className="BlockNu">
              {this.context.blockPage.eth_blockNumber}
            </span>
          </div>
          <input
            type="text"
            placeholder="Browse info about a Block by Block number"
            name="BlockInput"
            onChange={this.handleChange}
            className="BlockInput"
          ></input>
          <NavLink
            to="/BlockData"
            className="BlockInputButton"
            onClick={() =>
              this.context.blockPage.eth_getBlockByNumber(this.state.BlockInput)
            }
          >
            Browse
          </NavLink>
        </div>
      </div>
    );
  }
}

export default Block;
