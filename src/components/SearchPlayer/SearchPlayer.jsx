import React, { useEffect, useState } from 'react';

import './SearchPlayer.scss';

const SearchPlayer = () => {


    let [search, setSearch] = useState([]);
    const [input, setInput] = useState("");

    const API_URL = (`http://localhost:4000/players/allplayers`)

  useEffect(() => {
    fetch(API_URL)
        .then((response) => response.json())
        .then((data) => {
          setSearch(data);
        })
        .catch((err) => {
          console.log(err.message);
        });
  }, [API_URL]);

  const handleChange = (e) => {
    e.preventDefault();
    setInput(e.target.value);
  };

  if(input.length > 0) {
    search = search.filter((player) => {
      return player.name.match(input);
    })
  }

  

  return(
      <div>
          <input
          className="players__search"
          type="text"
          placeholder="Search"
          onChange={handleChange}
          value={input}
          />

<div className="players__content" >
          {search.map(players => (
            <div className="players__card" key={JSON.stringify(players._id)}>
              <h4>{players.name} {players.surname}</h4>
              <p>Age: {players.age}</p>
              <p>Position: {players.position}</p>
              <p>Team: {players.team["name"]}</p>
             
            </div>
        ))}
        </div>
          
        
      </div>
      
    

  )

  }
          
          
    

export default SearchPlayer