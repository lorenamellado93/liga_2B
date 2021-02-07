import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

class SecureRoute extends React.Component {
    render() {
        const { hasUser, ...restProps } = this.props;
        if (hasUser === null) {
            return (
                <div>Cargando...</div>
            )
        } else {
            return hasUser ? <Route {...restProps} /> : <Redirect to="/login" />
        }
        
    }
}

SecureRoute.propTypes = {
    hasUser: PropTypes.bool.isRequired,
}

export default SecureRoute;
