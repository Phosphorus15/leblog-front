import React from 'react';

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
    }

    render() {
        return <form className="standard-form" onSubmit={this.handleSubmit}>
            <input type="text" name="username" onChange={this.handleChange}/>
            <input type="text" name="mail" onChange={this.handleChange}/>
            <input type="password" name="pwd" onChange={this.handleChange}/>
            <input typeof="submit" name="submit"/>
        </form>
    }
}

export default RegisterForm
