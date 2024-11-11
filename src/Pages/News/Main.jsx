import React from 'react';
import logo from '../News/img/новость картинка 1 1.png'
import "../News/Main.scss"
const Main = () => {
    return (
       <main>
           <section>
               <div className="container">
                   <div className="section__open">
                       <div className="section__left">
                           <h1>ОТКРЫТИЕ <div/> МАЗИНА  <div/>
                               В ОЛМАЗАРСКОМ <div />
                               РАЙОНЕ
                           </h1>
                           <p className='section__left__p' >Теперь можете делать выгодные <div />
                               покупки каждый день с 08:00 до 22:00.<div/> Наш адрес: г. Ташкент, Юнусабадский <div/>
                               район, улица Юнусота,<div/> ориентир: напротив 12 поликлиники</p>
                           <p className='section_left_end'>Добавлено: 20 мая 2020 года</p>
                       </div>
                       <div className="section__right">
                           <img src={logo} alt=""/>
                       </div>
                   </div>
               </div>
           </section>
       </main>
    );
};

export default Main;