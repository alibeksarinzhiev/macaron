import React from 'react';
import img from './кукуруза 1.png'
import './Card.scss'

const Card = () => {
    return (
        <div className='card'>
            <div className="card__top">
                <h3>АКЦИОННЫЙ ТОВАР</h3>
                <div>-30%</div>
                </div>
                <div className="card__bottom">
                    <img src={img} alt="" />
                    <div className="card__right">
                        <p>“ASAL”  Мёд</p>
                        <h4>17.500</h4>
                        <p>UZS</p>
                    </div>
                </div>
        </div>
    );
};

export default Card;