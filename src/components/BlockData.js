import React, { Component } from "react";
import GlobalContext from "./context/GlobalContext";
import { NavLink } from "react-router-dom";

class BlockData extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  static contextType = GlobalContext;
  render() {
    var properties = [];
    var propertieValue = [];
    for (const property in this.context.blockPage.eth_BlockByNumber) {
      properties.push(property);
      propertieValue.push(this.context.blockPage.eth_BlockByNumber[property]);
    }
    var myDate = new Date(parseInt(propertieValue[15], 16) * 1000);
    return (
      <div
        className="BlockDataPage"
        style={{
          height: this.context.blockPage.eth_BlockByNumber
            ? undefined
            : "100vh",
          paddingBottom: this.context.blockPage.eth_BlockByNumber ? "8em" : "0",
        }}
      >
        <div
          className="BlockData"
          style={{
            height: this.context.blockPage.eth_BlockByNumber ? "42em" : "24em",
          }}
        >
          <NavLink
            to="/Block"
            className="NoBlockNu"
            style={{
              display: this.context.blockPage.eth_BlockByNumber
                ? "none"
                : "flex",
            }}
          >
            Get information about a Block by Block number
          </NavLink>
          <div className="BlockDataCol1">
            {properties.slice(0, properties.length / 2).map((each) => {
              return (
                <div
                  className="propsCol1"
                  id={each}
                  key={properties.indexOf(each)}
                >
                  {each}
                </div>
              );
            })}
          </div>
          <div
            className="BlockDataCol2"
            style={{
              borderRight: this.context.blockPage.eth_BlockByNumber
                ? "1px solid blue"
                : "1px solid transparent",
            }}
          >
            {propertieValue.slice(0, propertieValue.length / 2).map((each) => {
              return (
                <textarea
                  className="propsValueCol1"
                  id={each}
                  defaultValue={propertieValue[3] === each ? 
                  `${parseInt(each, 16)} (${100 - ((parseInt(propertieValue[2], 16) / parseInt(each, 16))/100).toString().slice(0,7)}%)` :
                     
                    propertieValue[0] === each || propertieValue[2] === each || propertieValue[9] === each ?
                      parseInt(each, 16)
                      : each}
                  key={propertieValue.indexOf(each)}
                ></textarea>
              );
            })}
          </div>
          <div className="BlockDataCol3">
            {properties
              .slice(properties.length / 2 + 1, properties.length)
              .map((each) => {
                return (
                  <div
                    className="propsCol1"
                    id={each}
                    key={properties.indexOf(each)}
                  >
                    {each}
                  </div>
                );
              })}
          </div>
          <div className="BlockDataCol4">
            {propertieValue
              .slice(propertieValue.length / 2 + 1, propertieValue.length)
              .map((each) => {
                return (
                  <textarea
                    className="propsValueCol1"
                    id={each}
                    defaultValue={propertieValue[13] === each ?parseInt(each, 16)/1000 + " bytes":
                      propertieValue[16] === each ?parseInt(each, 16):
                      (propertieValue[15] === each ?
                        myDate.toGMTString() + " " + 
                        myDate.toLocaleString() : (propertieValue[17] === each ||
                          propertieValue[19] === each
                            ? each.length
                            : each))
                    }
                    key={propertieValue.indexOf(each)}
                  ></textarea>
                );
              })}
          </div>
        </div>
      </div>
    );
  }
}

export default BlockData;
