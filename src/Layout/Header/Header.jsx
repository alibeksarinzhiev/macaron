import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.scss'
import logo from './images/HeaderLogo.svg'
import facebook from './images/HeaderFacebook.svg'
import telegram from './images/HeaderTelegram.svg'
import inst from './images/HeaderInstagram 2.svg'
import iconbasket from './images/shopping-cart.svg'

const Header = ({itemCount}) => {

    const [scrolled, setScrolled] = useState(false);

    useEffect(()=>{
        const headScroll = () => {
            setScrolled(window.scrollY > 90);
        };
        window.addEventListener('scroll', headScroll);
        return () => window.removeEventListener('scroll', headScroll);
    }, []);

    return (
        <header className={`header ${scrolled ? 'header__scroll' : ''}`}>
            <div className="header__container container">

                <div className="header__top">
                    <img className='header__top__logo' src={logo} alt="" />
                    <p className='header__top__number'>+998(71)205-95-95</p>
                    <div className='header__top__social'>
                        <img className='header__top__inst' src={inst} alt=""/>
                        <img className='header__top__facebook' src={facebook} alt=""/>
                        <img className='header__top__telegram' src={telegram} alt=""/>
                    </div>
                    <form className='header__top__form' action="">
                        <input className='header__top__input' type="text" placeholder='Search'/>
                        <button className='header__top__btn__input'>Поиск</button>
                    </form>
                    <p className='header__top__ru/en'>Ru</p>
                    <Link to={'basket'} className='header__top__basket'><img src={iconbasket} alt="" /></Link>
                    <div className="header__top__basket__red"></div>

                </div>

                <div className="header__center__line"></div>

                <div className="header__bottom">

                    <ul className='header__bottom__left'>
                        <Link to={''} className='header__bottom__left__nav'>ГЛАВНАЯ</Link>
                        <Link to={'about'} className='header__bottom__left__nav'>О НАС</Link>
                        <Link to={'shop'} className='header__bottom__left__nav'>МАГАЗИНЫ</Link>
                        <Link to={'news'} className='header__bottom__left__nav'>НОВОСТИ</Link>
                        <Link className='header__bottom__left__nav'>ПОЛЕЗНОЕ</Link>
                    </ul>

                    <ul className='header__bottom__right'>
                        <Link to={'partners'} className='header__bottom__right__nav'>ДЛЯ ПАРТНЁРОВ</Link>
                        <Link to={'carrier'} className='header__bottom__right__nav'>КАРЬЕРА</Link>
                    </ul>

                </div>

            </div>
        </header>
            
    );
};

export default Header;