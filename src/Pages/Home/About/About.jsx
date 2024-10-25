import React from 'react';
import './About.scss'

const About = () => {
    return (
        <section className='about__home'>
            <div className="about__container container">
                <h3 className='about__home__name'>О НАС</h3>
                <p className='about__home__text'>HAVAS - сеть дискаунтеров "у дома". Мы предлагаем нашим покупателям качественные продукты по выгодной цене. В наших магазинах представлены товары известных мировых и локальных брендов, а также товары собственного производства  под торговой маркой HAVAS</p>
                <button className='about__home__btn'>Подробнее</button>
            </div>
        </section>
    );
};

export default About;