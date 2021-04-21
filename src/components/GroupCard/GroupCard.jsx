import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import "./GroupCard.scss";

const GroupCard = (props) => {
  // const { id } = props.match.params;
  const [group, setGroup] = useState([]);
  const [groupTeams, setGroupTeams] = useState([]);

  const API_URL = `http://localhost:4000/groups/${props.match.params.groupsID}`;

  useEffect(() => {
    fetch(API_URL)
      .then((response) => response.json())
      .then((data) => {
        setGroup(data);
        setGroupTeams(data.teams)
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, [API_URL]);

  console.log(group);

  return (
    <div className="group">
      <h2>Grupo {group.name}</h2>
      <h3>Zona: {group.zone}</h3>
      
      <div className="group__content">
        {groupTeams.map((team) => (
        <div className="group__card">
          <img className="group__img" src={team.img} alt={team.name}/>
          <Link className="group__details" to={`/teams/${team._id}`}>{team.name}</Link>
        </div>
        ))}
      </div>
      
      <Link to={"/players"}>
        <button className="group__btn">Back GroupList</button>
      </Link>
    </div>
  );
};

export default GroupCard;
