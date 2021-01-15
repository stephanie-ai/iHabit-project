import React, { Component } from 'react';
import '../../styles/index.css'

class Register extends Component {
    state = {
        username: "",
        password: "",
        passwordConfirmation: ""
    }

    handleInput = e => this.setState({ [e.target.name]: e.target.value });

    formIncomplete = () => Object.values(this.state).some(v => !v) || this.state.password !== this.state.passwordConfirmation

    register = async (e) => {
        e.preventDefault();
        try {
            const userData = {
                username: this.state.username,
                password: this.state.password
            }
            const options = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(userData)
            }
            const r = await fetch(`http://localhost:3000/auth/register`, options);
            const data = await r.json();
            if (data.err) { throw Error(data.err) }
            this.props.login(userData);
            this.props.history.push('./habits')
        } catch (err) {
            console.warn(err);
            this.setState({
                username: "",
                password: "",
                passwordConfirmation: ""
            })
        }
    }

    render() {
        return (
            <div>
                <h2>Create an Account</h2>    

                <form onSubmit={this.register} >
                    <div className="loginInput">
                        <label htmlFor="username">Your new username</label>
                        <input type="text" name="username" onChange={this.handleInput} />
                    </div>
                    <div className="loginInput">
                        <label htmlFor="password">Create a password</label>
                        <input type="password" name="password" onChange={this.handleInput} />
                    </div>
                    <div className="loginInput">
                        <label htmlFor="passwordConfirmation">Confirm your password</label>
                        <input type="password" name="passwordConfirmation" onChange={this.handleInput} />
                    </div>
                    <div className="loginInput">
                        <input type="submit" className={this.formIncomplete() ? 'disabled' : 'enabled'} disabled={this.formIncomplete()} value="Create Account" />
                    </div>
                </form>
            </div>
        )
    }
}

export default Register;

// value={this.state.username} value={this.state.password}  value={this.state.passwordConfirmation} 
