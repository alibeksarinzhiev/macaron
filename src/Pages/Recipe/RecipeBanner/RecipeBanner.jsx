import React from 'react';
import './RecipeBanner.scss'
import bann from '../../../Img/ban.svg'

const RecipeBanner = () => {
    return (
        <section className='recipeBanner'>
            <div className="container">
                <div className="recipeBanner__content">
                <h2>Готовьте вместе с нами!</h2>
                    <img src={bann} alt="" />
                </div>  
            </div>
        </section>
    );
};

export default RecipeBanner;