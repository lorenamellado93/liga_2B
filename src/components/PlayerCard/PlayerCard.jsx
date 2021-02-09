import React, { useEffect, useState } from 'react';

import './PlayerCard.scss';

function PlayerCard(props) {

    const[player, setPlayer] = useState([])
	
	useEffect(() => {
        fetch(`http://localhost:4000/players/:id`)
            .then(res => res.json())
            .then((playerInfo) => {
                setPlayer(playerInfo)})
            .catch(err => err);
    }, [])

    console.log(player.name)
	return (
		<div>
			<h3>{player.name}</h3>
		</div>
	);
}

export default PlayerCard