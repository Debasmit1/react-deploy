import React from 'react';
import { Link,NavLink } from 'react-router-dom';

const Navbar = (props) => {
    console.log(props);
    return(
        <nav>
            <div className="nav-wrapper blue darken-4">
                <a href="#" className="brand-logo">My App</a>
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                    <li><NavLink to="/about">About</NavLink></li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar;