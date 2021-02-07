import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { checkUser } from './services/auth';

import Form from './components/SignupForm';
import LoginForm from './components/LoginForm';
import Players from './components/Players';
import SecureRoute from './components/SecureRoute';
import PrivateComponent from './components/PrivateComponent';

import Navbar from './container/Navbar/Navbar';
import Footer from './container/Footer';
import Home from './container/Home';

import './App.scss';

class App extends Component {

    state = {
        error: '',
        hasUser: null,
    }

    componentDidMount() {
        this.checkUserSession();
    }

    async checkUserSession(){
        try{
            const data = await checkUser();
            delete data.password;
            this.setState({ user: data, hasUser: true });
        } catch(error) {
            this.setState({ error: error.message, hasUser: false });
        }
    }

    saveUser = user => {
        delete user.password;
        this.setState({ user, hasUser: true })
    }

    handleInitUser = (userData) => {
        this.setState({ user: userData });
      };
    
    render(){
    return(
        <Router>
            {this.state.error && <p style={{ color: 'red', textAlign: 'center' }}>
          Ha ocurrido un error: {this.state.error}
        </p>}

            <div className="app">
                <Navbar />
                <Switch>
                    <Route path="/register" component={props => <Form {...props} saveUser={this.saveUser} />} />
                    <Route path="/login" component={props => <LoginForm {...props} saveUser={this.saveUser} />} />
                    <SecureRoute path="/pepe" hasUser={this.state.hasUser} component={props => <PrivateComponent {...props} />} />
                    <Route path="/players" exact component={ Players } />
                    <Route path="/" component={ Home } />
                </Switch>
                
                <Footer />
            </div>
        </Router>
    )
    }
}

export default App;
