import React from "react";
import {Link} from "react-router-dom";

function PageHeader() {
    return <header className="header">
        <h1 className="title">
            <Link className="logo" to="/">
                Welcome to the blogging system
            </Link>
        </h1>
        <nav className="links">
            <ul className="hide-links">
                <li><Link to="/login">Login</Link></li>
                <li><Link to="/register">Register</Link></li>
            </ul>
        </nav>
    </header>;
}

export default PageHeader