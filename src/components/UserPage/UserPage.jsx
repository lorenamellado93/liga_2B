import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import './UserPage.scss';

const UserPage = () => {

        return (
            <div className="userpage">
                <h3>Welcome!</h3>
                <div className="buttons">
                    <button>Players</button>
                    <button>Teams</button>
                    <button>Groups</button>
                    <Link to={`/lineup`}>
                      <button>My LineUp</button>
                    </Link>
                    <button>Add Player</button>
                </div>
                
            </div>
          )   
}

UserPage.propTypes = {
    handleLogout: PropTypes.func.isRequired,
  };

export default UserPage;
