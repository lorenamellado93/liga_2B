import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';

import SearchPlayer from '../SearchPlayer';

import './Players.scss';

const Players = () => {
  let [playersList, setPlayersList] = useState([]);
  let [newPlayersList, setNewPlayersList] = useState([]);
  const [page, setPage] = useState(1);
  const [input, setInput] = useState("");
  const [isBottom, setIsBottom] = useState(false);

  const API_LIMIT = 20
  const API_URL = (`http://localhost:4000/players?page=${page}&limit=${API_LIMIT}`)

  useEffect(() => {
    fetch(API_URL)
        .then((response) => response.json())
        .then((data) => {
          setPlayersList(data.results);
          setNewPlayersList(data.results);
        })
        .catch((err) => {
          console.log(err.message);
        });

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);

  }, [API_URL]);

  const handleChange = (e) => {
    e.preventDefault();
    setInput(e.target.value);
  };

  if(input.length > 0) {
    playersList = playersList.filter((player) => {
      return player.name.match(input);
    })
  }
  
  function handleScroll() {
    const scrollTop = (document.documentElement
      && document.documentElement.scrollTop)
      || document.body.scrollTop;
    const scrollHeight = (document.documentElement
      && document.documentElement.scrollHeight)
      || document.body.scrollHeight;
    if (scrollTop + window.innerHeight + 50 >= scrollHeight){
      setIsBottom(true);
    }
  }

  useEffect(() => {
    if (isBottom) {
      addItems();
    }
  }, [isBottom]);

  const addItems = () => {
    if (playersList.length !== 0) {
      setPage(prevPage => prevPage + 1);
      setPlayersList(playersList.concat(newPlayersList));
      };
      setIsBottom(false);
    }

    console.log(playersList)

  return (
    <div className="players">
      <h2>Listado de jugadores</h2>

        <div className="players__page">
        <input
          className="players__search"
          type="text"
          placeholder="Search"
          onChange={handleChange}
          value={input}
          />
        </div>

        <div className="players__content" onScroll={handleScroll}>
          {playersList.map(players => (
            <div className="players__card" key={JSON.stringify(players._id)}>
              <FontAwesomeIcon className="players__logo" icon={faUserCircle} size="4x" color="#ededed"/>
              <h4>{players.name} {players.surname}</h4>
              <p>Age: {players.age}</p>
              <p>Position: {players.position}</p>
              <p>Team: {players.team["name"]}</p>
              <div>
                    <Link to={{
                      pathname: `/players/${players._id}`,
                      state: players
                    }}>
                        <button className="players__details">Details</button>
                      </Link>
                        <div>
                          <Link to={`/teams/${players.team._id}`}>
                            <button className="players__button">Team</button>
                          </Link>
                          <Link to='/groups'>
                            <button className="players__button">Group</button>
                          </Link>
                          
                        </div>
                        </div>
            </div>
        ))}
        </div>
    </div>
  );
}



export default Players;
