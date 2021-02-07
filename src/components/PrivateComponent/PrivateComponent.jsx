import { Component } from 'react';

class PrivateComponent extends Component {
    render() {
        return (<div>
            COMPONENTE PRIVADO! SOLO USUARIOS AUTENTICADOS;
        </div>)
    }
}

export default PrivateComponent;
