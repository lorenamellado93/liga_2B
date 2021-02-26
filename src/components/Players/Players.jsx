import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';

import './Players.scss';

const Players = (props) => {
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
          setNewPlayersList([...playersList, data.results])
        })
        .catch((err) => {
          console.log(err.message);
        });

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
    
  }, [API_URL]);

  const handleIncrement = () => {
    setPage(prevPage => prevPage + 1);
  };

  const handleDecrement = () => {
    setPage(prevPage => prevPage - 1);
  };

  const handleChange = (e) => {
    e.preventDefault();
    setInput(e.target.value);
  };

  if(input.length > 0) {
    playersList = playersList.filter((i) => {
      return i.name.match(input);
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
      fetchMoreListItems();
    }
  }, [isBottom]);

  function fetchMoreListItems() {
    setTimeout(() => {
      setPage(prevPage => prevPage + 1);
      return newPlayersList
    }, 2000);
  }

  return (
    <div className="players">
      <h2>Listado de jugadores</h2>

        <div className="players__page">
          <button onClick={handleDecrement} className="players__button">Previous Page</button>
          <input
          className="players__search"
          type="text"
          placeholder="Search"
          onChange={handleChange}
          value={input}
          />
          <button onClick={handleIncrement} className="players__button">Next Page</button>
        </div>

        <div className="players__content" >
          {playersList.map(players => (
            <div className="players__card" key={JSON.stringify(players)}>
              <FontAwesomeIcon className="players__logo" icon={faUserCircle} size="4x" color="#ededed"/>
              <h4>{players.name} {players.surname}</h4>
              <p>Age: {players.age}</p>
              <p>Position: {players.position}</p>
              <p>Team: {players.team["name"]}</p>
              <div>
                      <Link to={`/players/${players._id}`}>
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
        ))}
        </div>
        <div className="players__page">
        <button onClick={handleDecrement} className="players__button">Previous Page</button>
        <button onClick={handleIncrement} className="players__button">Next Page</button>
      </div>
    </div>
  );
}



export default Players;