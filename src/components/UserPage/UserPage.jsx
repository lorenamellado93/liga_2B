import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { logout } from '../../services/auth';

export default class UserPage extends Component {
  handleOnClickLogout = async () => {
    await logout();
    this.props.handleLogout();
  };

  render() {
    return (
      <div>
        <h1>Esto es una ruta secreta</h1>
        <button onClick={this.handleOnClickLogout}>Cerrar sesión</button>
      </div>
    );
  }
}

UserPage.propTypes = {
  handleLogout: PropTypes.func.isRequired,
};