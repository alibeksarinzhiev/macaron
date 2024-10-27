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
                    {products.map((el)=>(
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












// const products = [
//     {
//       id: 1,
//       image: 'https://via.placeholder.com/150',
//       title: 'Смартфон',
//       sale: 15,
//       price: 15000,
//       currency: 'KGS',
//     },
//     {
//       id: 2,
//       image: 'https://via.placeholder.com/150',
//       title: 'Наушники',
//       sale: 10,
//       price: 3000,
//       currency: 'KGS',
//     },
//     {
//       id: 3,
//       image: 'https://via.placeholder.com/150',
//       title: 'Ноутбук',
//       sale: 20,
//       price: 55000,
//       currency: 'KGS',
//     },
//     {
//       id: 4,
//       image: 'https://via.placeholder.com/150',
//       title: 'Камера',
//       sale: 25,
//       price: 22000,
//       currency: 'KGS',
//     },
//   ];
  
//   const Cards = () => {
//     return (
//       <section className="cards">
//         <div className="cards__container">
//           <h2 className="cards__title">Специальные предложения</h2>
//           <div className="cards__grid">
//             {products.map(({ id, image, title, sale, price, currency }) => (
//               <div className="card" key={id}>
//                 <img src={image} alt={title} className="card__image" />
//                 <div className="card__content">
//                   <h3 className="card__title">{title}</h3>
//                   <p className="card__sale">Скидка: {sale}%</p>
//                   <p className="card__price">
//                     {price.toLocaleString()} {currency}
//                   </p>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>
//     );
//   };