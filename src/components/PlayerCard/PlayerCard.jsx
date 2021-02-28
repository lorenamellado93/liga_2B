import React, { useState } from 'react';
import { Link } from "react-router-dom";

import './PlayerCard.scss';

const PlayerCard = (props) => {

    if(!props.location.state) props.history.push("/players");
  
    const [player, setPlayer] = useState({...props.location.state});
  
    console.log(player);
  
    return (
      <div>
        <p>{player.name}</p>
        <Link to={"/players"}>
          <button>Back Players</button>
        </Link>
      </div>
    );
  };

export default PlayerCard