import React from 'react';
import { Link } from 'react-router-dom';

import './Home.scss'

class Home extends React.Component{
    render(){
        return (
            <section className="home">
                <div className="home__menu">
                    <div>
                       <h1>Liga Española 2B</h1> 
                    </div>

                    <div className="home__buttons">
                        <Link to='/players'>
                            <button>Players</button>
                        </Link>
                        
                        <Link to='/teams'>
                            <button>Teams</button>
                        </Link>
                        
                        <Link to='/groups'>
                            <button>Groups</button>
                        </Link>
                        
                    </div>
                    
                </div>

                <div className="home__Logo">
                    <img src={process.env.PUBLIC_URL + '/logo.png'} alt="TDF_logo"/>
                </div>
        
            </section>
            
        )    
    }
}

export default Home;