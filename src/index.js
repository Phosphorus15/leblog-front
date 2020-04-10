import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import PostBillboard from "./stream";

function App() {
    return (
        <Router>
            <div>
                <Switch>
                    <Route path="/login">
                    </Route>
                    <Route path="/register">
                    </Route>
                    <Route path="/">
                        <FrontPage />
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}


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
                        <li><Link to="/login">Login</Link></li>
                        <li><Link to="/register">Register</Link></li>
                    </ul>
                </nav>
            </header>
            <main className="main">
                <PostBillboard/>
            </main>
        </div>)
    }

}

ReactDOM.render(<App/>, document.getElementById("root"))
