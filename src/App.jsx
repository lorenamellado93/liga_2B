import React, { useEffect, useState } from 'react';
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
import TeamCard from './components/TeamCard';
import GroupCard from './components/GroupCard';
import Map from './components/Map';
import LineUp from './components/LineUp';

import Navbar from './container/Navbar/Navbar';
import Footer from './container/Footer';
import Home from './container/Home';

import './App.scss';


const App = () => {

    const [error, setError] = useState("");
    const [user, setUser] = useState({});
    const [hasUser, setHasUser] = useState(null)

    useEffect(() => { 
        checkUserSession()
    }, [])

    const checkUserSession = async () => {
        try{
            const data = await checkUser();
            delete data.password;
            setUser(data);
            setHasUser(true);
        } catch(error) {
            setError(error.message);
            setHasUser(false)
        }
    }

    const saveUser = (user) => {
        delete user.password;
        setUser(user);
        setHasUser(true);
        setError("");
    }

    const handleInitUser = (userData) => {
        setUser(userData);
      };

    const logoutUser = async () => {
        try{
            await logout();
            setUser(null)
            setHasUser(false);

        }catch(error) {
            setError(error.message);
            setHasUser(false)
        }
    }
    return(
        <Router>
            {hasUser && <button onClick={logoutUser}>Logout</button>}
            {error && <p style={{ color: 'red', textAlign: 'center' }}>
            {error}</p>}

            <div className="app">
                <Navbar />
                <Switch>
                    <Route path="/register" exact component={props => <Form {...props} saveUser={saveUser} />} />
                    <Route path="/login" exact component={props => <LoginForm {...props} saveUser={saveUser} />} />
                    <SecureRoute path="/userpage" exact hasUser={hasUser} component={props => <UserPage {...props} handleLogout={logoutUser} /> } />
                    <Route path="/players" exact component={ Players } />
                    <Route path="/players/:playerID" exact component={ PlayerCard } />
                    <Route path="/groups" exact component={ Groups } />
                    <Route path="/groups/:groupsID" exact component={ GroupCard } />
                    <Route path="/teams" exact component={ Teams } />
                    <Route path="/teams/:teamID" exact component={ TeamCard } />
                    <Route path="/map" exact component={ Map } />
                    <Route path="/lineup" exact component={ LineUp } />
                    <Route path="/" exact component={ Home } />
                    
                </Switch>
                
                <Footer />
            </div>
        </Router>
    )
}

export default App;
