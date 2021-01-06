import React from "react";
import GlobalContext from "./GlobalContext";

class GlobalState extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            YourApiKeyToken: "*Note:YourApiKey"
        };
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleSubmitBlock = this.handleSubmitBlock.bind(this)
    }
    componentDidMount() {
        var GetTotalSupplyofEther = `https://api.etherscan.io/api?module=stats&action=ethsupply&apikey=${this.state.YourApiKeyToken}`;
        fetch(GetTotalSupplyofEther)
            .then((res) => res.json())
            .then(param => this.setState({
                GetTotalSupplyofEther: param.result / 1000000000000000000
            }));
        fetch(`https://api.etherscan.io/api?module=stats&action=ethprice&apikey=${this.state.YourApiKeyToken}`)
            .then((res) => res.json())
            .then(param => this.setState({
                ethusd: param.result.ethusd,
                ethbtc: param.result.ethbtc
            }));
            var eth_blockNumber = `https://api.etherscan.io/api?module=proxy&action=eth_blockNumber&apikey=${this.state.YourApiKeyToken}`;
            fetch(eth_blockNumber)
                .then((res) => res.json())
                .then(param => this.setState({
                    eth_blockNumber: param.result
                }));
    }
    async handleSubmit(singleAdress) {
        var GetEtherBalanceforasingleAddress = `https://api.etherscan.io/api?module=account&action=balance&address=${singleAdress}&tag=latest&apikey=${this.state.YourApiKeyToken}`;
        await fetch(GetEtherBalanceforasingleAddress)
            .then((res) => res.json())
            .then(param => this.setState({
                GetEtherBalanceforasingleAddress: param.result
            }));
    }
    async handleSubmitBlock(blockNu) {
        await fetch(`https://api.etherscan.io/api?module=proxy&action=eth_getBlockByNumber&tag=${blockNu}&boolean=true&apikey=${this.state.YourApiKeyToken}`)
            .then((res) => res.json())
            .then(param => this.setState({
                eth_getBlockByNumber: param.result
            }));
    }
    render() {
        return (
            <GlobalContext.Provider
                value={{
                    homePage: {
                        GetTotalSupplyofEther: this.state.GetTotalSupplyofEther,
                        ethusd: this.state.ethusd,
                        ethbtc: this.state.ethbtc
                    },
                    adressPage: {
                        getAdress: this.handleSubmit,
                        etherBalance: this.state.GetEtherBalanceforasingleAddress / 1000000000000000000,
                    },
                    blockPage: {
                        eth_blockNumber: this.state.eth_blockNumber,
                        eth_getBlockByNumber: this.handleSubmitBlock,
                        eth_BlockByNumber: this.state.eth_getBlockByNumber,
                        
                    }
                }}
            >
                {this.props.children}
            </GlobalContext.Provider>
        );
    }
}

export default GlobalState;