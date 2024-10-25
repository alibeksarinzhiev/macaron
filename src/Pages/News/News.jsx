import React from 'react';
import "./section.scss"
import logo from "../News/img/новость картинка 1 1.png"
const News = () => {
    return (
        <section>
            <div className="container">
                <div className="section__wrapper">
                    <div className="section__left">
                        <p className='open1'>ОТКРЫТИЕ <div/> МАЗИНА <div/> В ОЛМАЗАРСКОМ <div/> РАЙОНЕ</p>
                        <p className='open2'>Теперь можете делать выгодные <div/> покупки каждый день с 08:00 до 22:00. <div/> Наш адрес: г. Ташкент, Юнусабадский <div/> район, улица Юнусота, <div/> ориентир: напротив 12 поликлиники</p>
                    </div>
                    <div className="section__right">
                        <img src={logo} alt="" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default News;