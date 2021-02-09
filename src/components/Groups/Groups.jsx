import React from 'react';
import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFutbol } from '@fortawesome/free-solid-svg-icons';

import './Groups.scss';

class Groups extends React.Component{
    constructor(props) {
        super(props);
        this.state = { 
          groupsList: [],
         }
      }
    
      componentWillMount() {
        fetch("http://localhost:4000/groups")
            .then(res => res.json())
            .then(res => 
              this.setState({
                groupsList: res }))
            .catch(err => err);
    }

    render() {
    
      return (
        <div className="groups">
          <h2>Listado de grupos</h2>
    
          <div className="groups__content">
            {this.state.groupsList.length ? (
              this.state.groupsList.map((groups) => (
                <div className="groups__card" key={JSON.stringify(groups)}>
                  <FontAwesomeIcon className="groups__logo" icon={faFutbol} size="4x" color="#ededed"/>
                  <h4>Group: {groups.name}</h4>
                  <p>Equipos de: </p>
                  <p>  {groups.zone}</p>
                    <div>
                      <div className="groups__buttons">
                        <Link to='/players'>
                            <button className="groups__button">Players</button>
                        </Link>
                        <Link to='/teams'>
                            <button className="groups__button">Teams</button>
                        </Link>
                        
                      </div>
                    </div>
                    
                </div>
              ))
            ) : (
              null
            )}
          </div>
        </div>
      );
    }
}

export default Groups