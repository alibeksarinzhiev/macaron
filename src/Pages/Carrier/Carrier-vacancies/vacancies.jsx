import React from 'react';
import './vacancies.scss'
import own__img1 from '../imgs/seller 1.png'
import own__img2 from '../imgs/Group.png'
import own__img3 from '../imgs/real-estate 1.png'
import own__img4 from '../imgs/forklift 1.png'
import own__img5 from '../imgs/automobile 1.png'
import own__img6 from '../imgs/Group (1).png'

const vacancies = () => {
    return (
        <section className='vacancies'>
            <div className="container">
                <div className="pos-yellow">
                    <h3>Свободные вакансии</h3>
                    <div className="FADF00"></div>
                </div>
                
                <div className="vacancies__btns">
                    <p>Склад</p>
                    <p>Магазин</p>
                    <p>Офис</p>
                </div>
                <div className="own">
                    <div className="own-vacancies">
                        <img src={own__img1} alt="" />
                        <div className="own-vacancies-right">
                            <p>Оператор Call-центра</p>
                            <div className="own-line"></div>
                            <h4>Заполнить анкету</h4>
                        </div>
                    </div>
                    <div className="own-vacancies">
                        <img src={own__img2} alt="" />
                        <div className="own-vacancies-right">
                            <p>Помощник бухгалтера</p>
                            <div className="own-line"></div>
                            <h4>Заполнить анкету</h4>
                        </div>
                    </div>
                    <div className="own-vacancies">
                    <img src={own__img2} alt="" />
                        <div className="own-vacancies-right">
                            <p>Продавец кассир</p>
                            <div className="own-line"></div>
                            <h4>Заполнить анкету</h4>
                        </div>
                    </div>
                    <div className="own-vacancies">
                    <img src={own__img2} alt="" />
                        <div className="own-vacancies-right">
                            <p>Грузчик на склад</p>
                            <div className="own-line"></div>
                            <h4>Заполнить анкету</h4>
                        </div>
                    </div>
                    <div className="own-vacancies">
                    <img src={own__img2} alt="" />
                        <div className="own-vacancies-right">
                            <p>Водетель</p>
                            <div className="own-line"></div>
                            <h4>Заполнить анкету</h4>
                        </div>
                    </div>
                    <div className="own-vacancies">
                    <img src={own__img2} alt="" />
                        <div className="own-vacancies-right">
                            <p>Охранник</p>
                            <div className="own-line"></div>
                            <h4>Заполнить анкету</h4>
                        </div>
                    </div>
                </div>

                <div className="vacancies__bottom">
                    <p>Заполните анкету и узнайте на какую вакансию вы подходите!</p>
                    <button>Заполнить</button>
                </div>
            </div>
        </section>
    );
};

export default vacancies;