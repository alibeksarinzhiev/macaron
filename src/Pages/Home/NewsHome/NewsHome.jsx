import React from 'react';
import './NewsHome.scss'
import IMG1 from '../NewsHome/NewsHomeIMG/1.svg'
import IMG2 from '../NewsHome/NewsHomeIMG/2.svg'
import IMG3 from '../NewsHome/NewsHomeIMG/3.svg'
import IMG4 from '../NewsHome/NewsHomeIMG/4.svg'

const NewsHome = () => {
    return (
        <section className='news__home'>
            <div className="news__home__container container">
                <h3 className='news__home__name'>НОВОСТИ</h3>
                <div className="news__home__box">
                    <img className='news__home__img1' src={IMG1} alt="" />
                    <img className='news__home__img2' src={IMG2} alt="" />
                    <img className='news__home__img3' src={IMG4} alt="" />
                    <img className='news__home__img4' src={IMG3} alt="" />
                </div>
               <button className='news__home__btn'>Смотреть все новости</button>
            </div>
        </section>
    );
};

export default NewsHome;