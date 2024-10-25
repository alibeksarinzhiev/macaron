import React from 'react';
import './Choose.scss'
import vector1 from '../imgs/Vector.svg'
import vector2 from '../imgs/Vector (1).svg'

const Choose = () => {
    return (
        <section className='choose'>
            <div className="container">
                <div className="pos-yellow">
                    <h3>Почему я выбрал Havas?</h3>
                    <div className="FADF00"></div>
                    
                </div>
                <div className="why-choose">
                    <div className="choose__right__img"></div>
                    <div className="choose__left">
                        <h4>Зигмунд Фрейд</h4>
                        <span>Операционный директор</span>
                        <p>Зигмунд Фрейд поступил в университет рано, когда ему было 17 лет, но закончил его только в 25. Это было необычно для того времени: как правило, обучение длилось 5 лет, — но Фрейд был любопытен и страшно увлечен наукой, поэтому старался впитать знания разных дисциплин.</p>
                        <div className="choose__page">
                            <img src={vector1} alt="" />
                            <span>1</span>
                            <p>2</p>
                            <p>3</p>
                            <img src={vector2} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Choose;