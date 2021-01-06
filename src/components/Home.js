import React from "react";
import GlobalContext from "./context/GlobalContext";

const Home = () => {
  return (
    <GlobalContext.Consumer>
      {(context) => (
        <div className="HomePage">
          <div className="Home">
            <div className="HomeTitle">
              Ethereum
              <br />
              transactions
            </div>
            <div
              className="loaderContainer"
              style={{
                display:
                  context.homePage.GetTotalSupplyofEther === undefined
                    ? "flex"
                    : "none",
              }}
            >
              <div className="circleLoad"></div>
            </div>
            <div
              className="HomeETHTitle"
              style={{
                display:
                  context.homePage.GetTotalSupplyofEther === undefined
                    ? "none"
                    : "flex",
              }}
            >
              Total Supply of Ether
            </div>
            <div
              className="HomeETHinfo"
              style={{
                display:
                  context.homePage.GetTotalSupplyofEther === undefined
                    ? "none"
                    : "flex",
              }}
            >
              <div
                className="HomeETHinfoNu"
                style={{
                  display:
                    context.homePage.GetTotalSupplyofEther === undefined
                      ? "none"
                      : "flex",
                }}
              >
                {context.homePage.GetTotalSupplyofEther}
              </div>
            </div>
            <div
              className="HomeLastPrice"
              style={{
                display:
                  context.homePage.GetTotalSupplyofEther === undefined
                    ? "none"
                    : "flex",
              }}
            >
              ETH Last Price
            </div>
            <div
              className="HomeLastPriceInfo"
              style={{
                display:
                  context.homePage.GetTotalSupplyofEther === undefined
                    ? "none"
                    : "flex",
              }}
            >
              <div className="HomeLastPriceInfoNu">
                {context.homePage.ethbtc &&
                  "$ " +
                    context.homePage.ethusd +
                    " @ " +
                    context.homePage.ethbtc +
                    " BTC"}
              </div>
            </div>
          </div>
          <div className="About">
            An application that allows a user to view transaction data from the
            Ethereum blockchain.
          </div>
        </div>
      )}
    </GlobalContext.Consumer>
  );
};

export default Home;
