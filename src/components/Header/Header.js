import React from 'react'
import logo from '../../img/logo.png'
import {Link} from 'react-router-dom'

function Header(){
    return (
        <header>
            <div className="container h-flex">
            <img src={logo} alt="logo" />
            <nav className = 'links'>
                <ul>
                    <li>
                        <a href="/" className = 'menu__links'>Лента</a>
                    </li>
                    <li>
                        <Link to = 'profile' className = 'menu__links'>Профиль</Link>
                    </li>
                </ul>
            </nav>
            </div>
        </header>
    )
}

export default Header