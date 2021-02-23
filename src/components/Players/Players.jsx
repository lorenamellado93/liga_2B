import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
//import InfiniteScroll from "react-infinite-scroll-component";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';

import './Players.scss';

const Players = (props) => {
  const [playersList, setPlayersList] = useState([]);
  const playersResults = playersList.results

  const API_PAGE = 1
  const API_LIMIT = 20
  const API_URL = (`http://localhost:4000/players?page=${API_PAGE}&limit=${API_LIMIT}`)

  useEffect(() => {
    fetch(API_URL)
        .then((response) => response.json())
        .then((data) => {
          setPlayersList(data);
        })
        .catch((err) => {
          console.log(err.message);
        });
  }, [API_URL]);

  console.log(playersResults)

  return () => {
    <div className="players">
          <h2>Listado de jugadores</h2>
    
          <div className="players__content">
            {playersResults.length ? (
              playersResults.map((players) => (
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

  }
}

export default Players;