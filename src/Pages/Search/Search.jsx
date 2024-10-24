import React from 'react';
import SearchResult from './SearchResult/SearchResult';
import './Search.scss'
import './SearchMedia.scss'
import img_1 from './images/SMJ_5950c-Exp 1.png'
import img_2 from './images/Rectangle 63.png'
import img_3 from './images/Rectangle 63 (1).png'
import facebook_img from './images/facebook 3.png'
import whatsapp_img from './images/whatsapp.png'
import telegram_img from './images/telegram (2) 1.png'
import odnokl_img from './images/Group 50.png'

const Search = () => {
    return (
        <section className='search'>
            <div className="container">
                <div className="search__top">
                    <button>Назад</button>
                    <div className="search__top__socials">
                        <p>Поделиться:</p>
                        <ul>
                            <li><img src={facebook_img} alt="" /></li>
                            <li><img src={whatsapp_img} alt="" /></li>
                            <li><img src={telegram_img} alt="" /></li>
                            <li><img src={odnokl_img} alt="" /></li>
                        </ul>
                    </div>
                </div>
                <div className="search__result">
                    <h2>Результаты поиска: <span>Чипсы</span></h2>
                    <p>Найдено: 2</p>
                </div>
                <div className="search__line"></div>
                <div className="search__main">
                    <SearchResult title={`Фоторепортаж с открытия 43-го дискаунтера сети HAVAS на Сайраме!`} text={'Теперь можете делать выгодные покупки каждый день с 08:00 до 22:00. Наш адрес: г. Ташкент, Юнусабадский район, улица Юнусота,ориентир: напротив 12 поликлиники'} img={img_1} date={'Добавлено: 12.16.2020'}/>
                    <div className="search__main__line"></div>
                    <SearchResult title={`Фоторепортаж с открытия 43-го дискаунтера сети HAVAS на Сайраме!`} text={'Теперь можете делать выгодные покупки каждый день с 08:00 до 22:00. Наш адрес: г. Ташкент, Юнусабадский район, улица Юнусота,ориентир: напротив 12 поликлиники'} img={img_2} date={'Добавлено: 12.16.2020'}/>
                    <div className="search__main__line"></div>
                    <SearchResult title={`Фоторепортаж с открытия 43-го дискаунтера сети HAVAS на Сайраме!`} text={'Теперь можете делать выгодные покупки каждый день с 08:00 до 22:00. Наш адрес: г. Ташкент, Юнусабадский район, улица Юнусота,ориентир: напротив 12 поликлиники'} img={img_3} date={'Добавлено: 12.16.2020'}/>
                </div>
            </div>
        </section>
    );
};

export default Search;