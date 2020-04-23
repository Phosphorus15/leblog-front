import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import {
    HashRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import {PostBillboard, SinglePostPage, UserPosts} from "./stream";
import {LoginPage, PageHeader, RegisterPage} from "./form";

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
                    <Route path="/p/:pid" component={SinglePostPage}/>
                    <Route path="/u/:user" component={UserPosts}/>
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
