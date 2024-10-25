import React from 'react';
import logo from "../Footer/image-footer/логотип 2.svg"
import instagram from "../Footer/image-footer/instagram 1.svg"
import facebook from "../Footer/image-footer/facebook 1.svg"
import telegram from "../Footer/image-footer/telegram 1.svg"
import "./Footer.scss"

const Footer = () => {
    return (
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