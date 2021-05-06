import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";

import "./PlayerCard.scss";

const PlayerCard = (props) => {
  if (!props.location.state) props.history.push("/players");

  const [player, setPlayer] = useState({ ...props.location.state });
  const [team, setTeam] = useState([]);

  const API_URL = `https://liga-2b.herokuapp.com/players/${props.location.state._id}`;

  useEffect(() => {
    fetch(API_URL)
      .then((response) => response.json())
      .then((data) => {
        setTeam(data.team);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, [API_URL]);

  console.log(team);

  return (
    <div className="player">
      <h2>
          {player.name} {player.surname}
        </h2>
      <div className="player__content">
        

        <div className="player__icon">
          <FontAwesomeIcon
            className="player__logo"
            icon={faUserCircle}
            size="8x"
            color="#ededed"
          />
        </div>

        <div className="player__data">
          <h5>Edad: {player.age}</h5>
          <h5>Altura: {player.height}</h5>
          <h5>Nacionalidad: {player.nationality}</h5>
          <h5>Lateralidad: {player.foot}</h5>
          <h5>Posición: {player.position}</h5>

          <h5>Equipo: {team.name}</h5>
        </div>
      </div>
      <Link to={"/players"}>
        <button className="btn">Back Players</button>
      </Link>

      {/* <Link to={`/teams/${player.team._id}`}>
        <button className="btn">Team</button>
      </Link>  */}
    </div>
  );
};

export default PlayerCard;
