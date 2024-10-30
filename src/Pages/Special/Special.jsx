import React, { useEffect } from 'react';
import './Special.scss'
import { useSelector } from 'react-redux';
import { Link,useNavigate } from 'react-router-dom';

const Special = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    },[]);

    const products = useSelector((state)=>state.productsSlice.data)
    const navigate = useNavigate()

    return (
        <section className='special'>
            <div className="container">
                <h2>Специальные предложения</h2>
                <ul>
                    <li>Акции</li>
                    <li>Новинки</li>
                    <li>Все</li>
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
                                <p>{el.sale}%</p>
                            </div>
                            <div className="card__name">
                                <p className='card__right__asal'>{el.title}</p>
                                <p className='card__price'>{el.price}.<span>{el.pricesmall}</span></p>
                                <p className='card__price__uzs'>{el.valute}</p>
                            </div>
                        </div>
                        </div>
                        <button onClick={()=>navigate(`/single/${el.id}`)}>Подробнее</button>
                    </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Special;