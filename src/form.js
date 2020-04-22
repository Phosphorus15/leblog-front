import React from 'react';
import {Link} from "react-router-dom";
import {submit_register} from "./network";

class PageHeader extends React.Component {
    render() {
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
}

class RegisterPage extends React.Component {
    render() {
        return <div className="container">
            <PageHeader/>
            <RegisterForm/>
        </div>
    }
}

class RegisterForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            username: '',
            mail: '',
            pwd: '',
        }
    }

    handleChange = (event) => {
        let target = event.target
        let value = target.value
        let name = target.name
        this.setState({
            [name]: value
        })
    }


    handleSubmit = (event) => {
        submit_register(this.state).then(res => {

        })
        event.preventDefault()
    }

    render() {
        return <div className="login">
            <form className="box standard-form" onSubmit={this.handleSubmit}>
                <div className="form-caption">Create your account</div>
                <input placeholder="我其实不是密码哒~" className="input" type="text" name="username" onChange={this.handleChange}/>
                <input type="text" name="mail" onChange={this.handleChange}/>
                <input type="password" name="pwd" onChange={this.handleChange}/>
                <input className="primary-button submit" type="submit" value="Register" name="submit"/>
            </form>
        </div>
    }
}

export {PageHeader, RegisterPage}
