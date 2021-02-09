import { Component } from 'react';
import PropTypes from 'prop-types';

import './UserPage.scss';

class UserPage extends Component {

    render() {
        return (
            <div className="userpage">
                <h3>Welcome!</h3>
                <div className="buttons">
                    <button>Players</button>
                    <button>Teams</button>
                    <button>Groups</button>
                    <button>My LineUP</button>
                    <button>Add Player</button>
                </div>
                
            </div>
          )   
    }
}

UserPage.propTypes = {
    handleLogout: PropTypes.func.isRequired,
  };

export default UserPage;
