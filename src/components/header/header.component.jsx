import React from 'react';
import { Link } from 'react-router-dom'
import { auth } from '../../firebase/firebase.utils'

import { ReactComponent  as Logo } from '../../assets/Logo.svg';
import './header.styles.scss';

const Header = ({ currentuser }) => (
    <header className="header">
        <Link className="logo-container" to="/">
            <Logo className="logo" />            
        </Link>
        <div className="options">
            <Link className="option" to="/shop">
                SHOP
            </Link>
            <Link className="option" to="/contact">
                CONTACT
            </Link>
            {
                currentuser ?
                <div className="option" onClick={() => auth.signOut()} >SIGN OUT</div>
                :
                <Link className="option" to="/signin">
                    SIGN IN
                </Link>
            }
        </div>
    </header>
)


export default Header;