import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import './Teams.scss';

const Teams = () => { 
    const [teamList, setTeamList] = useState([]);
    const [teamGroup, setTeamGroup] = useState([]);

    const API_URL = (`http://localhost:4000/teams`)
    
      useEffect(() => {
        fetch(API_URL)
        .then((response) => response.json())
        .then((data) => {
          setTeamList(data);
          setTeamGroup(data.group);
        })
        .catch((err) => {
          console.log(err.message);
        });
    });

    
      return (
        <div className="teams">
          <h2>Listado de Equipos</h2>
    
          <div className="teams__content">
            {teamList.map((teams) => (
                <div className="teams__card" key={JSON.stringify(teams)}>
                  <div className="teams__img">
                    <img src={teams.img} alt={teams.name}/>
                  </div>
                    
                  
                  <h4>{teams.name}</h4>
                    <div className="teams__btn">
                    <Link to={`/teams/${teams._id}`}>
                      <button className="teams__details">Details</button>
                    </Link>
                      <div>
                        <Link to='/players'>
                          <button className="teams__button">Players</button>
                        </Link>
                        <Link to={`/groups/`}>
                          <button className="teams__button">Group</button>
                        </Link>
                        
                      </div>
                    </div>
                    
                </div>
              ))
            }
          </div>
        </div>
      );
}

export default Teams
