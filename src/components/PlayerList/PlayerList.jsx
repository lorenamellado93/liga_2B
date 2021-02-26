import React from 'react';

const PlayerList = ({playersList=[]}) => {
  return (
    <>
    { playersList.map((data,index) => {
        if (data) {
          return (
            <div key={data._id}>
              <h1>{data.name}</h1>
	    </div>	
    	   )	
    	 }
    	 return null
    }) }
    </>
  );
}

export default PlayerList;