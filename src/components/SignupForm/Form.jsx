import React, { Component } from 'react';
import { register } from '../../services/auth';

import './Form.scss';

//Inicio del estado vacío donde recoge el contenido del formulario.
const INITIAL_STATE ={
    email: '',
    password: '',
}

class Form extends Component {

    state = INITIAL_STATE;
    
    //Función que asigna el nombre del atributo y el valor que recoge
    handelChangeInput = (e) => {
    const { name, value } = e.target
        //Asignamos los nuevos valores al estado
        this.setState({[name] : value})
    };

    handelFormSubmit = async (e) => {
        e.preventDefault ();

        try{
            const data = await register(this.state);
            this.props.saveUser(data);
            this.setState(INITIAL_STATE);
            this.props.history.push('/pepe');
        }catch (err) {
            this.setState({
                error: err.message,
            })
        }
        this.setState(INITIAL_STATE);
    } 

    render(){
        return (
            <div className="sign">
                <h2>Sign In:</h2>
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
                Ha ocurrido un error: {this.state.error}
                </p>}
                
                <button type="submit">Enviar</button>
            </form>
            </div>
        )
    };
}

export default Form;