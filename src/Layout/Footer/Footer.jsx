import React from 'react';
import './Footer.scss'
import footerLogo from './FooterImages/FooterLogo.svg'
import inst from './FooterImages/FooterInstagram.svg'
import facebook from './FooterImages/FooterFacebook.svg'
import telegram from './FooterImages/FooterTelegram.svg'
import { Link } from 'react-router-dom';


const Footer = () => {
    return (
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

                </div>

                <div className="footer__center__line"></div>

                <div className="footer__bottom">

                    <p className='footer__bottom__left'>Сайт разработан Division Marketing Agency</p>
                    <div className="footer__bottom__right">
                        <img src={inst} alt="" />
                        <img src={facebook} alt="" />
                        <img src={telegram} alt="" />
                    </div>

                </div>

            </div>
        </footer>
    );
};

export default Footer;