import React from 'react';
import { Link } from 'react-router-dom';

import './Teams.scss';

class Teams extends React.Component{
    constructor(props) {
        super(props);
        this.state = { 
          teamsList: [],
         }
      }
    
      componentWillMount() {
        fetch("http://localhost:4000/teams")
            .then(res => res.json())
            .then(res => 
              this.setState({
                teamsList: res }))
            .catch(err => err);
    }

    render() {
    
      return (
        <div className="teams">
          <h2>Listado de Equipos</h2>
    
          <div className="teams__content">
            {this.state.teamsList.length ? (
              this.state.teamsList.map((teams) => (
                <div className="teams__card" key={JSON.stringify(teams)}>
                  <div className="teams__img">
                    <img src={teams.img} alt={teams.name}/>
                  </div>
                    
                  
                  <h4>{teams.name}</h4>
                    <div className="teams__btn">
                    <Link to={`/teams/${teams._id}`}
                    playerName={teams.name}>
                      <button className="teams__details">Details</button>
                    </Link>
                      <div>
                        <Link to='/players'>
                          <button className="teams__button">Players</button>
                        </Link>
                        <Link to='/groups'>
                          <button className="teams__button">Group</button>
                        </Link>
                        
                      </div>
                    </div>
                    
                </div>
              ))
            ) : (
              null
            )}
          </div>
        </div>
      );
    }
}

export default Teams