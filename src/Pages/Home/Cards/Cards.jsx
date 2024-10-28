import React from 'react';
import './Cards.scss'
import cardImages from './CardsImg/кукуруза 1 (1).svg'


const Cards = () => {
    return (
        <section className='cards'>
            <div className="cards__container container">

                <div className="cards__name">
                    <h3 className='cards__name__h3'>СПЕЦИАЛЬНОЕ ПРЕДЛОЖЕНИЕ</h3>
                    <p className='cards__name__p'>*ЦЕНА АКТУАЛЬНА НА ОПРЕДЕЛЕННЫЙ СРОК</p>
                </div>
                
                <div className="cards__box">

                    <div className="card">
                        <div className="card__left">
                            <h4 className='card__left__h4'>АКЦИОННЫЙ ТОВАР</h4>
                            <img className='card__img' src={cardImages} alt="" />
                        </div>

                        <div className="card__right">
                            <div className="card__right__30">
                                <p>-30%</p>
                            </div>
                            <div className="card__name">
                                <p className='card__right__asal'>“ASAL”  Мёд</p>
                                <p className='card__price'>17.<span>500</span></p>
                                <p className='card__price__uzs'>UZS</p>
                            </div>
                        </div>
                    </div>

                    <div className="card">
                        <div className="card__left">
                            <h4 className='card__left__h4'>АКЦИОННЫЙ ТОВАР</h4>
                            <img className='card__img' src={cardImages} alt="" />
                        </div>

                        <div className="card__right">
                            <div className="card__right__30">
                                <p>-30%</p>
                            </div>
                            <div className="card__name">
                                <p className='card__right__asal'>“ASAL”  Мёд</p>
                                <p className='card__price'>17.<span>500</span></p>
                                <p className='card__price__uzs'>UZS</p>
                            </div>
                        </div>
                    </div>

                    <div className="card">
                        <div className="card__left">
                            <h4 className='card__left__h4'>АКЦИОННЫЙ ТОВАР</h4>
                            <img className='card__img' src={cardImages} alt="" />
                        </div>

                        <div className="card__right">
                            <div className="card__right__30">
                                <p>-30%</p>
                            </div>
                            <div className="card__name">
                                <p className='card__right__asal'>“ASAL”  Мёд</p>
                                <p className='card__price'>17.<span>500</span></p>
                                <p className='card__price__uzs'>UZS</p>
                            </div>
                        </div>
                    </div>

                    <div className="card">
                        <div className="card__left">
                            <h4 className='card__left__h4'>АКЦИОННЫЙ ТОВАР</h4>
                            <img className='card__img' src={cardImages} alt="" />
                        </div>

                        <div className="card__right">
                            <div className="card__right__30">
                                <p>-30%</p>
                            </div>
                            <div className="card__name">
                                <p className='card__right__asal'>“ASAL”  Мёд</p>
                                <p className='card__price'>17.<span>500</span></p>
                                <p className='card__price__uzs'>UZS</p>
                            </div>
                        </div>
                    </div>

                    <div className="card">
                        <div className="card__left">
                            <h4 className='card__left__h4'>АКЦИОННЫЙ ТОВАР</h4>
                            <img className='card__img' src={cardImages} alt="" />
                        </div>

                        <div className="card__right">
                            <div className="card__right__30">
                                <p>-30%</p>
                            </div>
                            <div className="card__name">
                                <p className='card__right__asal'>“ASAL”  Мёд</p>
                                <p className='card__price'>17.<span>500</span></p>
                                <p className='card__price__uzs'>UZS</p>
                            </div>
                        </div>
                    </div>

                    <div className="card">
                        <div className="card__left">
                            <h4 className='card__left__h4'>АКЦИОННЫЙ ТОВАР</h4>
                            <img className='card__img' src={cardImages} alt="" />
                        </div>

                        <div className="card__right">
                            <div className="card__right__30">
                                <p>-30%</p>
                            </div>
                            <div className="card__name">
                                <p className='card__right__asal'>“ASAL”  Мёд</p>
                                <p className='card__price'>17.<span>500</span></p>
                                <p className='card__price__uzs'>UZS</p>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </section>
    );
};

export default Cards;