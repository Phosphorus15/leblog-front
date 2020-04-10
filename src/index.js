import React from 'react';
import ReactDOM from 'react-dom';
import Axios from 'axios';
import './index.css';

class FrontPage extends React.Component {

    render() {
        return (<div className="container">
            <header className="header">
                <h1 className="title">
                    <a className="logo" href="/">
                        Welcome to the blogging system
                    </a>
                </h1>
                <nav className="links">
                    <ul className="hide-links">
                        <li><a href="./login">Login</a></li>
                        <li><a href="./register">Register</a></li>
                    </ul>
                </nav>
            </header>
            <main className="main">
                <h3> Recent Posts : </h3>
            </main>
        </div>)
    }

}

ReactDOM.render(
    <FrontPage/>,
    document.getElementById("root")
)
