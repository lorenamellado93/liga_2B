import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faFutbol } from "@fortawesome/free-solid-svg-icons";

import Map from "../Map";

import "./Groups.scss";

const Groups = (props) => {

  const [groupList, setGroupList] = useState([]);

  const API_URL = `https://liga-2b.herokuapp.com/groups`;

  useEffect(() => {
    fetch(API_URL)
      .then((response) => response.json())
      .then((data) => {
        setGroupList(data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, [API_URL]);

  console.log(groupList._id);

  return (
    <div className="groups">
      <h2>Listado de grupos</h2>

      <div className="groups__container">
        <Map className="grupos__map" />

        <div className="groups__content">
          {groupList.map((groups) => (
            <div className="groups__card" key={JSON.stringify(groups)}>
              <h3>Group: {groups.name}</h3>
              <p>Equipos de: </p>
              <p> {groups.zone}</p>
              <div>
                <div className="groups__buttons">
                  <Link to="/players">
                    <button className="groups__button">Players</button>
                  </Link>
                  <Link to={`/groups/${groups._id}`}>
                    <button className="groups__button">Teams</button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Groups;
