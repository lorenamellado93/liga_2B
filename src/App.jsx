import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { checkUser, logout } from './services/auth';

import Form from './components/SignupForm';
import LoginForm from './components/LoginForm';
import Players from './components/Players';
import SecureRoute from './components/SecureRoute';
import UserPage from './components/UserPage';
import PlayerCard from './components/PlayerCard';
import Groups from './components/Groups';
import Teams from './components/Teams';

import Navbar from './container/Navbar/Navbar';
import Footer from './container/Footer';
import Home from './container/Home';

import './App.scss';


class App extends Component {

    state = {
        error: '',
        hasUser: undefined,
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

    logoutUser = async () => {
        try{
            await logout();

            this.setState({
                user: null,
                hasUser: false,
            })
        }catch(error) {
            this.setState({ error: error.message, hasUser: false });
        }
    }

    render(){
    return(
        <Router>
            {this.state.hasUser && <button onClick={this.logoutUser}>Logout</button>}
            {this.state.error && <p style={{ color: 'red', textAlign: 'center' }}>
            {this.state.error}
        </p>}

            <div className="app">
                <Navbar />
                <Switch>
                    <Route path="/register" component={props => <Form {...props} saveUser={this.saveUser} />} />
                    <Route path="/login" component={props => <LoginForm {...props} saveUser={this.saveUser} />} />
                    <SecureRoute path="/pepe" hasUser={this.state.hasUser} component={props => <UserPage {...props} handleLogout={this.handleLogout} /> } />
                    <Route path="/players" exact component={ Players } />
                    <Route path="/players/:playerID" component={ PlayerCard } />
                    <Route path="/groups" exact component={ Groups } />
                    <Route path="/teams" exact component={ Teams } />
                    <Route path="/" component={ Home } />
                    
                </Switch>
                
                <Footer />
            </div>
        </Router>
    )
    }
}

export default App;
