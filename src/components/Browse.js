import React, { Component } from "react";
import GlobalContext from "./context/GlobalContext";
import { NavLink } from "react-router-dom";

class Browse extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    static contextType = GlobalContext
    render() {
        return (
            <div className="Browse">
                <NavLink to="/" className="HomeLink">Home</NavLink>
                <div className="BrowseLinks">
                    <p className="BrowseBy">Browse by</p>
                    <NavLink to="/Adress" className="AdressLink">Adress</NavLink>
                    <NavLink to="/Block" className="BlockLink">Block</NavLink>
                </div>
            </div>);
    }
}

export default Browse;