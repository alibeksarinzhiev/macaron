import React from 'react';
import './Cards.scss'
import cardImages from './CardsImg/кукуруза 1 (1).svg'
import {useSelector } from 'react-redux';


const Cards = () => {

    const products = useSelector((state)=>state.productsSlice.data)

    
    return (
        <section className='cards'>
            <div className="cards__container container">

                <div className="cards__name">
                    <h3 className='cards__name__h3'>СПЕЦИАЛЬНОЕ ПРЕДЛОЖЕНИЕ</h3>
                    <p className='cards__name__p'>*ЦЕНА АКТУАЛЬНА НА ОПРЕДЕЛЕННЫЙ СРОК</p>
                </div>
                
                <div className="cards__box">
                    {products.slice(0,6).map((el)=>(
                     <div className="card">
                        
                        <div className="card__left">
                            <h4 className='card__left__h4'>АКЦИОННЫЙ ТОВАР</h4>
                            <img className='card__img' src={el.image} alt="" />
                        </div>

                        <div className="card__right">
                            <div className="card__right__30">
                                <p>{el.sale}%</p>
                            </div>
                            <div className="card__name">
                                <p className='card__right__asal'>{el.title}</p>
                                <p className='card__price'>{el.price}.<span>{el.pricesmall}</span></p>
                                <p className='card__price__uzs'>{el.valute}</p>
                            </div>
                        </div>
                      
                    </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default Cards;












