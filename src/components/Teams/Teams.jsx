import React from 'react';

import './Teams.scss';

class Teams extends React.Component{
    constructor(props) {
        super(props);
        this.state = { 
          teamList: [],
         }
      }
      componentWillMount() {
        fetch("http://localhost:4000/teams")
            .then(res => res.json())
            .then(res => 
              this.setState({
                teamList: res }))
            .catch(err => err);
    }
    
    render() {
      console.log(this.state.teamList);
    
      return (
        <div className="App">
          <h2>Listado de personajes</h2>
    
          <div>
            {this.state.teamList.length ? (
              this.state.teamList.map((team) => (
                <div key={JSON.stringify(team)}>
                  <h4>Name: {team.name}</h4>
                </div>
              ))
            ) : (
              <h3>¡No hay personajes cargados!</h3>
            )}
          </div>
        </div>
      );
    }
}

export default Teams