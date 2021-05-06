import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";

import "./TeamCard.scss";

const TeamCard = (props) => {
  // const { id } = props.match.params;
  const [team, setTeam] = useState([]);
  let [teamplayers, setTeamPlayers] = useState([]);
  const [teamGroup, setTeamGroup] = useState([]);

  const API_URL = `https://liga-2b.herokuapp.com/teams/${props.match.params.teamID}`;


  useEffect(() => {
    fetch(API_URL)
      .then((response) => response.json())
      .then((data) => {
        setTeam(data);
        setTeamPlayers(data.players);
        setTeamGroup(data.group);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, [API_URL]);


  return (
    <div className="teams">
      <div className="teams__info">
        <img className="teams__img" src={team.img} alt="Escudo Deportivo" />
        <div className="teams__data">
          <h2>{team.name}</h2>
          <h4>{team.stadium}</h4>
          <h4>{team.coach}</h4>
          <Link
            to={{
              pathname: `/groups/${teamGroup._id}`,
              state: team,
            }}
          >
            <button className="players__button">Group</button>
          </Link>
        </div>
      </div>

      <div className="players__content">
        {teamplayers.map((players) => (
          <div className="players__card" key={JSON.stringify(players._id)}>
            <FontAwesomeIcon
              className="players__logo"
              icon={faUserCircle}
              size="4x"
              color="#ededed"
            />
            <h4>
              {players.name} {players.surname}
            </h4>
            <p>Age: {players.age}</p>
            <p>Position: {players.position}</p>
            <div>
            
            <Link to={{
                      pathname: `/players/${players._id}`,
                      state: players
                    }}>
                <button className="players__details">Details</button>
              </Link>
            </div>
          </div>
        ))}
      </div>
      <Link to={"/players"}>
        <button>Back Players</button>
      </Link>
    </div>
  );
};

export default TeamCard;
