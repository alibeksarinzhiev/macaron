import React, { useEffect, useState } from 'react';
import './Basket.scss'
import { useSelector } from 'react-redux';
import { plusCount,minusCount,basketDel } from '../../store/BasketSlice/BasketSlice';
import { useDispatch } from 'react-redux';

const Basket = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        window.scrollTo(0, 0);
    },[]);

    
    
    const basket = useSelector((state) => state.basketSlice.basket );


    return (
        <section className='basket'>
            <div className="basket__container container">
                <h2 className='basket__name'>КОРЗИНА</h2>
                <button onClick={()=>dispatch(basketDel())}>Удалить все</button>
                <h2>Итог {basket.reduce((acc,el)=>{
                    let price = `${el.price}.${el.pricesmall}`
                    console.log(price)
                    return acc + el.count * price
                },0)}</h2>
                {basket.length > 0 ? (
                  basket.map((el) => (
                <div className="basket__box">
                
                    <div className="basket__box__left">
                        <img className='basket__box__left__img' src={el.image} alt="" />
                        <div className="basket__box__left__text">
                            <h4 className='basket__box__left__title'>{el.title}</h4>
                            <p className='basket__box__left__description'>{el.description}</p>
                        </div>
                    </div>
                    <div className="basket__box__center">
                        <button onClick={()=>dispatch(plusCount(el))}>+</button>
                        <button onClick={()=>dispatch(minusCount(el))}>-</button>
                    </div>
                    <div className="basket__box__right">
                        <div className="basket__box__right__prux">
                           <h3 className='basket__box__right__price'>{el.price }.<span>{el.pricesmall}</span>сом</h3>
                           <p className='basket__box__right__count'>X {el.count}</p>
                        </div>
                        <button className='basket__box__right__btn'>Купить</button>
                        

                    </div>
                
                </div>
              ))
            ) : (
              <p className='basket__box__empty__text'>Ваша корзина пуста.</p>
            )}
            </div>
        </section>
    );
};

export default Basket;






