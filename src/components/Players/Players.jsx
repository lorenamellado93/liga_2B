import React from 'react';
import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';

import './Players.scss';

class Players extends React.Component{
    constructor(props) {
        super(props);
        this.state = { 
          playersList: [],
         }
      }
    
      componentWillMount() {
        fetch("http://localhost:4000/players")
            .then(res => res.json())
            .then(res => 
              this.setState({
                playersList: res }))
            .catch(err => err);
    }

    render() {
    
      return (
        <div className="players">
          <h2>Listado de jugadores</h2>
    
          <div className="players__content">
            {this.state.playersList.length ? (
              this.state.playersList.map((players) => (
                <div className="players__card" key={JSON.stringify(players)}>
                  <FontAwesomeIcon className="players__logo" icon={faUserCircle} size="4x" color="#ededed"/>
                  <h4>{players.name} {players.surname}</h4>
                  <p>Age: {players.age}</p>
                  <p>Position: {players.position}</p>
                  <p>Team: {players.team}</p>
                    <div>
                    <Link to={`/players/${players._id}`}
                    playerName={players.name}>
                      <button className="players__details">Details</button>
                    </Link>
                      <div>
                        <Link to='/teams'>
                          <button className="players__button">Team</button>
                        </Link>
                        <Link to='/groups'>
                          <button className="players__button">Group</button>
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

export default Players