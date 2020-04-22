import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import {
    HashRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import PostBillboard from "./stream";
import {LoginPage, PageHeader, RegisterPage} from "./form";
//  等等，我先把这个做出来看一下...
window.recaptchaOptions = {
    useRecaptchaNet: true
}

function App() {
    return (
        <Router>
            <div>
                <Switch>
                    <Route path="/login">
                        <LoginPage/>
                    </Route>
                    <Route path="/register">
                        <RegisterPage/>
                    </Route>
                    <Route path="/">
                        <FrontPage/>
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}

class FrontPage extends React.Component {

    render() {
        return (<div className="container">
            <PageHeader/>
            <main className="main">
                <PostBillboard/>
            </main>
        </div>)
    }

}

ReactDOM.render(<App/>, document.getElementById("root"))
