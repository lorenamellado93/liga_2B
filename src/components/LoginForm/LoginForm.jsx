import React, { Component } from 'react';

import { login } from '../../services/auth';

import './LoginForm.scss'

const INITIAL_STATE = {
    email: '',
    password: '',
}

class LoginForm extends Component {

    state = INITIAL_STATE

    handelChangeInput = (e) => {
        const { name, value } = e.target;
        this.setState({ [name] : value })
    };

    handelFormSubmit = async (e) => {
        e.preventDefault();

        try{
            const data = await login(this.state);
            this.props.saveUser(data);
            this.setState(INITIAL_STATE);
            this.props.history.push('/pepe');
        }catch(err){
            this.setState({
                error: err.message,
            });
        }
    }

    render(){
        return(
            <div className ="login">
                <h2>Login:</h2>
            <form className="form" onSubmit={this.handelFormSubmit}>
                <label htmlFor="email">
                    <p>Email</p>
                    <input 
                        type="text"
                        name="email"
                        value={this.state.email}
                        onChange={this.handelChangeInput}
                    />
                </label>

                <label htmlFor="password">
                    <p>Password</p>
                    <input 
                        type="password"
                        name="password"
                        value={this.state.password}
                        onChange={this.handelChangeInput}
                    />
                </label>
                {this.state.error && <p style={{ color: 'red' }}>
                    Ha ocurrido un error: {this.state.error}</p>}
                <button type="submit">Enviar</button>
            </form>
            </div>
        )
    }
}

export default LoginForm;