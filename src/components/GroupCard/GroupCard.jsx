import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import "./GroupCard.scss";

const GroupCard = (props) => {
  const { id } = props.match.params;
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

  console.log(groupTeams);

  return (
    <div>
      <p>{group.name}</p>
      <p>{group.zone}</p>
      
      {groupTeams.map((player) => (
        <div className="players__card">
          <h4>
            {player.name} {player.surname}
          </h4>
        </div>
      ))}
       
      <Link to={"/players"}>
        <button>Back Players</button>
      </Link>
      <Link to={`/group/`}>
        <button className="players__button">Group</button>
      </Link>
    </div>
  );
};

export default GroupCard;
