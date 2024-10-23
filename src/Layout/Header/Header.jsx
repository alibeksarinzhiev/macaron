import React from 'react';
import { Link } from 'react-router-dom';
import './Header.scss'
import logo from './images/логотип 3 (1).png'
import facebook from './images/facebook 2 (1).png'
import telegram from './images/telegram 2 (1).png'
import inst from './images/instagram 2.svg'
import Shop from '../../Pages/Shop/Shop'

const Header = () => {
    return (
        <header className='header'>
           <div className='header__container container'>
            <div className="header__top">
                <img src={logo} alt="" />
                <div className="header__search">
                <p>+998(71)205-95-95</p>
                <img src={telegram} alt="" />
                <img src={inst} alt="" />
                <img src={facebook} alt="" />
                <form action="">
                    <input type="text" />
                    <button>Поиск</button>
                </form>
                <select name="" id="">
                    <option value="">Ru</option>
                    <option value="">En</option>
                </select> 
                </div>
            </div>
            <div className="header__line"></div>
            <div className="header__bottom">
                <ul>
                    <li>ГЛАВНАЯ</li>
                    <li>О НАС</li>
                    <li><Link to='/shop'>МАГАЗИН</Link></li>
                    <li>НОВОСТИ</li>
                    <li>ПОЛЕЗНОЕ</li>
                </ul>
                <ul>
                    <li>ДЛЯ ПАРТНЁРОВ</li>
                    <li>КАРЬЕРА</li>
                    <input type="checkbox" />
                </ul>
            </div>
            </div> 
        </header>
    );
};

export default Header;