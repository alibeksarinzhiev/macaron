import React, { useEffect } from 'react';
import './Special.scss'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Slider from './Slider/Slider'

const Special = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    },[]);

    const products = useSelector((state)=>state.productsSlice.data)
    const navigate = useNavigate()

    return (
        <section className='special'>
             <Slider/>
            <div className="container">
                <h2 className='special__name__top'>Специальные предложения</h2>
                <ul className='special__name__ul'>
                    <li className='special__name__link'>Акции</li>
                    <li className='special__name__link'>Новинки</li>
                    <li className='special__name__link'>Все</li>
                </ul>
                <div className="special__cards">
                    {products.map((el)=>(
                        <div className="special__card">
                            <div className="card">
                        <div className="card__left">
                            <h4 className='card__left__h4'>АКЦИОННЫЙ ТОВАР</h4>
                            <img className='card__img' src={el.image} alt="" />
                        </div>

                        <div className="card__right">
                            <div className="card__right__30">
                                <p>-{el.sale}%</p>
                            </div>
                            <div className="card__name">
                                <p className='card__right__asal'>{el.title}</p>
                                <p className='card__price'>{el.price}.<span>{el.pricesmall}</span></p>
                                <p className='card__price__uzs'>{el.valute}</p>
                            </div>
                        </div>
                        </div>
                        <div className="special__bottom-box">
                        <h3 className="special__bottom-title">{el.title}</h3>
                        <p className="special__bottom-text">{el.description}</p>
                        <button onClick={()=>navigate(`/single/${el.id}`)}>Подробнее...</button>
                        </div>
                    </div>
                    ))}
          <ul className="special__nav-list">
          <li className="special__list-items">1</li>
          <li className="special__list-items">2</li>
          <li className="special__list-items">3</li>
          <li className="special__list-items">4</li>
          <li className="special__list-items">5</li>
          <li className="special__list-items">6</li>
        </ul>
     
                </div>
      
            </div>
        </section>
    );
};

export default Special;