import React from 'react';
import { Route, Redirect } from 'react-router-dom';


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

export default SecureRoute;
