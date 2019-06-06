import React from "react";
import { Link, NavLink } from "react-router-dom";

let style = {
    nav: {
        background: "darkgrey"
    },
    logo: {
        color: "white"
    }
}

const Navbar = props => {
    return (
        <div style={style.nav} className="navbar">
            <Link to="/" style={style.logo} className="navbar-brand logo">Google Book Search</Link>
            <nav className="d-flex ml-auto">
                <NavLink to="/" className="nav-link text-white" activeClassName="active">Search</NavLink>
                <NavLink to="/saved" className="nav-link text-white" activeClassName="active">Saved</NavLink>
            </nav>
        </div>
    )
}

export default Navbar;