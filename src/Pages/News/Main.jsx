
import "./Main.scss"

import card1 from "../News/img/card1.jpg"
import card2 from "../News/img/Rectangle 63.jpg"
import card3 from "../News/img/Rectangle 63 (1).jpg"
import card4 from "../News/img/card4.png"
import card5 from "../News/img/card-5.jpg"
import News from "./News"



const Main = () => {
    return (
        <main>
            <section>
                <div className="container">
                    <News />
                    <div className='yellow'></div>
                    <h2>Новости</h2>
                    <div className="section__wrapper2">
                        <div className="section__event">
                            <p>Главные события</p>
                            <p>Все</p>
                        </div>
                        <div className='section__event-line'></div>
                        <div className="cards__wrapper">
                            <div className="cards-left">
                                <div className="card">
                                    <img src={card1} alt="" />
                                    <div className="text">
                                        <p className='apped'>Добавлено: 12.16.2020</p>
                                        <h3>Фоторепортаж с открытия 43-го <div />
                                            дискаунтера сети HAVAS на Сайраме!</h3>
                                        <p className='apped2'>Теперь можете делать выгодные покупки каждый день с <div /> 08:00 до 22:00. Наш адрес: г. Ташкент, Юнусабадский <div />
                                            район, улица Юнусота,ориентир: напротив 12 поликлиники</p>
                                        <p className='reading'>Читать подробнее...</p>
                                    </div>
                                </div>
                                <div className="card">
                                    <img src={card2} alt="" />
                                    <div className="text">
                                        <p className='apped'>Добавлено: 12.16.2020</p>
                                        <h3>Юбилейный магазин HAVAS открыт! <div />
                                            Магазин уже открыт и начал...</h3>
                                        <p className='apped2'>25 магазин HAVAS расположился в Яшнабадском районе, <div />
                                            массив Лисунова-2, улица Иззат. Яшнабадском районе, <div /> массив Лисунова-2, улица Иззат.</p>
                                        <p className='reading'>Читать подробнее...</p>
                                    </div>
                                </div>
                                <div className="card">
                                    <img src={card3} alt="" />
                                    <div className="text">
                                        <p className='apped'>Добавлено: 12.16.2020</p>
                                        <h3>Первая сеть дискаунтеров в Узбекистане! <div />
                                            Магазин формата “У дома”</h3>
                                        <p className='apped2'>Теперь можете делать выгодные покупки каждый день с <div /> 08:00 до 22:00. Наш адрес: г. Ташкент, Юнусабадский район, <div /> улица Юнусота, ориентир: напротив 12 поликлиники</p>
                                        <p className='reading'>Читать подробнее...</p>
                                    </div>
                                </div>
                                <div className="card">
                                    <img src={card4} alt="" />
                                    <div className="text">
                                        <p className='apped'>Добавлено: 12.16.2020</p>
                                        <h3>Фоторепортаж с открытия 43-го <div /> дискаунтера сети HAVAS на Сайраме!</h3>
                                        <p className='apped2'>Теперь можете делать выгодные покупки каждый день с <div /> 08:00 до 22:00. Наш адрес: г. Ташкент, Юнусабадский район, <div /> улица Юнусота, ориентир: напротив 12 поликлиники</p>
                                        <p className='reading'>Читать подробнее...</p>
                                    </div>
                                </div>
                                <div className="card">
                                    <img src={card5} alt="" />
                                    <div className="text">
                                        <p className='apped'>Добавлено: 12.16.2020</p>
                                        <h3>Юбилейный магазин HAVAS открыт! <div />
                                            Магазин уже открыт и начал...</h3>
                                        <p className='apped2'>Теперь можете делать выгодные покупки каждый день с <div /> 08:00 до 22:00. Наш адрес: г. Ташкент, Юнусабадский район, <div /> улица Юнусота, ориентир: напротив 12 поликлиники</p>
                                        <p className='reading'>Читать подробнее...</p>
                                    </div>
                                </div>
                            </div>
                            <div className="cards-right">
                                <div className="card-1">
                                    <h4>Статьи</h4>
                                    <div className="text-1">
                                        <p className='apped__statya'>Добавлено: 12.16.2020</p>
                                        <h3 className='h3'>Юбилейный магазин HAVAS открыт! <div />
                                            Магазин уже открыт и начал...</h3>
                                        <p className='apped3'>Теперь можете делать выгодные покупки каждый день с <div /> 08:00 до 22:00. Наш адрес: г. Ташкент, Юнусабадский район, <div /> улица Юнусота, ориентир: напротив 12 поликлиники</p>
                                        <p className='apped__statya'>Добавлено: 12.16.2020</p>
                                        <h3 className='h3'>Юбилейный магазин HAVAS открыт! <div />
                                            Магазин уже открыт и начал...</h3>
                                        <p className='apped3'>Теперь можете делать выгодные покупки каждый день с <div /> 08:00 до 22:00. Наш адрес: г. Ташкент, Юнусабадский район, <div /> улица Юнусота, ориентир: напротив 12 поликлиники</p>
                                        <p className='apped__statya'>Добавлено: 12.16.2020</p>
                                        <h3>Юбилейный магазин HAVAS открыт! <div />
                                            Магазин уже открыт и начал...</h3>
                                        <p className='apped3'>Теперь можете делать выгодные покупки каждый день с <div /> 08:00 до 22:00. Наш адрес: г. Ташкент, Юнусабадский район, <div /> улица Юнусота, ориентир: напротив 12 поликлиники</p>
                                        <p className='reading_all'>Читать все статьи</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}
export default Main;