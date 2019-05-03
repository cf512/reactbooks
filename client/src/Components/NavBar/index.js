import React from "react"
import {Link} from "react-router-dom"
const Navbar = (props) => {

    return (  <nav>
        <div className="nav-wrapper">
          <Link to="/" className="brand-logo">Google Books</Link>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li><Link to="/">Search</Link></li>
            <li><Link to="/saved">Saved</Link></li>
          </ul>
        </div>
      </nav>)
}

export default Navbar;