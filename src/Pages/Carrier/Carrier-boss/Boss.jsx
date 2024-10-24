import React from 'react';
import bossLogo from '../imgs/image.png'
import './Boss.scss'

const Boss = () => {
    return (
        <section className='boss'>
            <div className="container">
                <div className="boss__right__img"></div>
                <div className="boss__left">
                    <h4>Абидов Даврон</h4>
                    <span>Начальник отдела кадров</span>
                    <p>Меньше чем за год, мы открыли более 50 магазинов по городу Ташкент! И это не все, в наших планах открыть магазины в каждом областном филиале нашей страны! Мы регулярно проводим тим-билдинги с нашими сотрудниками, тем самым, делая отличную команду! И это не все, в наших планах открыть магазины в каждом областном филиале нашей страны!</p>
                </div>
            </div>
        </section>
    );
};

export default Boss;