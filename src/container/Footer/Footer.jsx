import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBehance , faInstagram, faLinkedin, faMedium } from '@fortawesome/free-brands-svg-icons'

import './Footer.scss';

class Footer extends React.Component{
    render() {
        return (
            <footer className="footer">

                <div className="footer__owner">
                    <h6>Creado por Lorena Mellado</h6>
                </div>

                <div className="footer__socialmedia">
                    <Link to='/https://www.behance.net/lorenamellado1'>
                        <FontAwesomeIcon icon={faBehance} color="#f50025" size="1x" className="footer__icon" a="https://www.behance.net/lorenamellado1"/>
                    </Link>
                    
                    <FontAwesomeIcon icon={faLinkedin} color="#f50025" size="1x" className="footer__icon"/>
                    <FontAwesomeIcon icon={faInstagram} color="#f50025" size="1x" className="footer__icon"/>
                    <FontAwesomeIcon icon={faMedium} color="#f50025" size="1x" className="footer__icon"/>

                </div>
            </footer>
        )
    }
}

export default Footer;