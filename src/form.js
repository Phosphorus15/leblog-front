import React from 'react';
import {Link} from "react-router-dom";

class PageHeader extends React.Component {
    render() {
        return  <header className="header">
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

class RegisterPage extends React.Component{
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
            email: '',
            password: '',
        }
    }

    handleSubmit() {
    }

    handleChange(event) {
        let target = event.target
        let value = target.value
        let name = target.name
        this.setState({
            [name]: value
        })
    }

    render() {
        return <form className="standard-form" onSubmit={this.handleSubmit}>
            <input type="text" name="username" onChange={this.handleChange}/>
            <input type="text" name="mail" onChange={this.handleChange}/>
            <input type="password" name="pwd" onChange={this.handleChange}/>
            <input type="submit" name="submit"/>
        </form>
    }
}

export {PageHeader, RegisterPage}
