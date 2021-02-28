import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";

import './TeamCard.scss';

const TeamCard = (props) => {

    const { id } = props.match.params
    const [team, setTeam] = useState([]);
    const [teamplayers, setTeamPlayers] = useState([]);

    const API_URL = (`http://localhost:4000/teams/${props.match.params.teamID}`)

  useEffect(() => {
    fetch(API_URL)
        .then((response) => response.json())
        .then((data) => {
            setTeam(data);
            setTeamPlayers(data.players);
        })
        .catch((err) => {
          console.log(err.message);
        });
  }, [API_URL]);
  
    console.log(teamplayers);
  
    return (
      <div>
        <p>{team.name}</p>
        {teamplayers.map(player => (
            <div className="players__card">
              <h4>{player.name} {player.surname}</h4>
              
            </div>
        ))}
        <Link to={"/players"}>
          <button>Back Players</button>
        </Link>
      </div>
    );
  };

export default TeamCard
