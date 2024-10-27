import React from 'react';
import './QuestionMap.scss'
import { YMaps, Map, Placemark } from '@pbe/react-yandex-maps';




const QuestionMap = () => {
    return (
        <section className='question__map'>
            <div className="question__map__container container">
                <h3 className='question__map__name'>ХОТИТЕ ЗАДАТЬ ВОПРОС?</h3>

                <div className="question__map__box">
                    <div className="question__map__left">
                        <p className='question__map__left__call'>Позвоните нам</p>
                        <p className='question__map__left__number'>+998(71) 205-95-95</p>
                        <p className='question__map__left__text'>Напишите нам</p>
                        <form className='question__map__form' action="">
                            <input className='question__map__input' type="email" name="" id="" placeholder='Напишите ваш e-mail'/>
                            <textarea className='question__map__area' name="" id="" placeholder='Напишите сообщение...'></textarea>
                            <button className='question__map__left__btn'>Отправить</button>
                        </form>
                    </div>
    
                    <div className="question__map__right">
                        <YMaps query={{ apikey: '30676071-86db-4ef1-b543-0d4e04ef5dc5' }}>
                            <div style={{ width: '580px', height: '378px' }}>
                              <Map 
                                defaultState={{ center: [42.875985, 74.603672], zoom: 10 }} 
                                width="100%" 
                                height="100%"
                              >
                                <Placemark geometry={[55.751244, 37.618423]} />
                              </Map>
                            </div>
                        </YMaps>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default QuestionMap;