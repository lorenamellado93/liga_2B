import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

import './Navbar.scss';

class Navbar extends React.Component {
    constructor(){
        super();

        this.state = {
            showMenu: false,
        };

        this.showMenu = this.showMenu.bind(this);

    }

    showMenu(event) {
        event.preventDefault();

        this.setState({ showMenu: true });
    }

  render() {
    return (
      <nav className="navbar">
        <div className="navbar__menu">
          <FontAwesomeIcon className="navbar__icon" icon={faBars} size="2x" color="#f50025" onClick={this.showMenu}/>
        
        {/* Menú desplegable mediante ternario en el que si el botón es cliclado
        se devuelve el div de botones, y si no se hace clic se devuelve null */}
          {
              this.state.showMenu 
              ?
              (
                  <div className="navbar__displayMenu" >
                      <button>Players</button>
                      <button>Teams</button>
                      <button>Groups</button>
                      <button>My Lineup</button>
                      <button>Add player</button>
                  </div>
              )
              :
              (null)
          }
        </div>

        <Link className="navbar__logo" to='/'>
          <img src={process.env.PUBLIC_URL + '/logo.png'} alt="TDF_logo"/>
        </Link>

        <div className="navbar__user">
          <Link className="navbar__button" to="/register">Sign Up</Link>
          <Link className="navbar__login" to="/login" >Login </Link>
        </div>
      </nav>
    );
  }
}

export default Navbar;