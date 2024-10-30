import React from 'react';
import logo from "../Footer/image-footer/логотип 2.svg"
import instagram from "../Footer/image-footer/instagram 1.svg"
import facebook from "../Footer/image-footer/facebook 1.svg"
import telegram from "../Footer/image-footer/telegram 1.svg"
import "./Footer.scss"

const Footer = () => {
    return (
<<<<<<< HEAD
        <footer className='footer'>
            <div className="footer__container container">

                <div className="footer__top">
                    <img className='footer__top__logo' src={footerLogo} alt="" />

                    <div className="footer__top__left">
                        <h4 className='footer__top__left__name'>Потребителям:</h4>
                        <ul className='footer__top__left__nav'>
                            <li className='footer__top__left__nav__li'><Link to="/shop">Магазины</Link></li>
                            <li className='footer__top__left__nav__li'> <Link to="/news">Новости</Link></li>
                            <li className='footer__top__left__nav__li'><Link to="/special">Специальные предложения</Link></li>
                            <li className='footer__top__left__nav__li'><Link to="/recipe">Рецепты</Link></li>
                        </ul>
                    </div>

                    <div className="footer__top__center">
                        <ul className='footer__top__center__nav'>
                            <li className='footer__top__center__nav__li'><Link>Социальные проекты</Link></li>
                            <li className='footer__top__center__nav__li'><Link to="/about">О нас</Link></li>
                            <li className='footer__top__center__nav__li'><Link to="/partners">Для партнёрства</Link></li>
                            <li className='footer__top__center__nav__li'><Link to="/carrier">Карьера</Link></li>
                        </ul>
                    </div>

                    <div className="footer__top__right">
                        <h4 className='footer__top__right__name'>Партнёрам:</h4>
                        <ul className='footer__top__right__nav'>
                            <li className='footer__top__right__nav__li'>Для партнёров</li>
                            <li className='footer__top__right__nav__li'>Каталог</li>
                            <li className='footer__top__right__nav__li'>Анкета для HR</li>
                            <li className='footer__top__right__nav__li'>Обратная связь</li>
                        </ul>
                    </div>

=======
        <footer>
            <div className="container">
                <div className="footer__wrapper">
                    <div className="logo">
                        <img src={logo} alt="" />
                    </div>
                <div className="h3">
                    <h3>Потребителям:</h3>
                    <ul className='ul-1'>
                        <li>Магазины</li>
                        <li>Новости</li>
                        <li>Специальные предложения</li>
                        <li>Рецепты</li>
                    </ul>
>>>>>>> 1fdc652bacba9bc7a268969a49b738cbefa422cc
                </div>
                <div className="center">
                    <ul>
                        <li>Социальные проекты</li>
                        <li>О нас</li>
                        <li>Для партнёрства</li>
                        <li>Карьера</li>
                    </ul>
                </div>
                <div className="h3-2">
                    <h3>Партнёрам:</h3>
                    <ul className='ul_2'>
                        <li>Для партнёров</li>
                        <li>Каталог</li>
                        <li>Анкета для HR</li>
                        <li>Обратная связь</li>
                    </ul>
                </div>
                </div>
                <div className='line'></div>
            <div className="footer__end">
                <div className="footer__left">
                <p>Сайт разработан Division Marketing Agency</p>
                </div>
                <div className="footer_right">
                    <img src={instagram} alt="" />
                    <img src={facebook} alt="" />
                    <img src={telegram} alt="" />
                </div>
            </div>
            </div>
        </footer>
    );
};

export default Footer;