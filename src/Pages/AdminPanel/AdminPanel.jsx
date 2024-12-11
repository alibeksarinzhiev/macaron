import React, { useEffect, useState } from 'react';
import './AdminPanel.scss'
import avatar from './AdminPanelIMG/Profile.svg'
import { Link } from 'react-router-dom';
import axios from 'axios';

const AdminPanel = () => {

    const [nav, setNav] = useState("add");

    const [message, setMessage] = useState("");

    const [find, setFind] = useState(null)

    const addProduct = (e)=>{
       e.preventDefault(); 
   
       const product = {
         title:e.target[0].value,
         image:e.target[1].value,
         price:e.target[2].value,
         pricesmall:e.target[3].value,
         valute:e.target[4].value,
         sale:e.target[5].value,
         isPromotion:e.target[6].value, 
         isNew:e.target[7].value, 
         description:e.target[8].value
       };
   
       axios.post("http://localhost:3000/products", product)
         .then((successfully)=>{
           if (successfully.status === 201){
             setMessage("Товар добавлен успешно")
           }
         })
         .catch((error)=>{
           setMessage("Ошибка добавлении товара",error)
         });
    }

    useEffect(()=>{
        if (message) {
          const time = setTimeout(()=>{
            setMessage("");
          },3000);
    
          return () => clearTimeout(time);
        }
    }, [message]);

    // --------------------------------------------------------------------------------------------------------------------------

      let deleteOne = (e)=>{
        e.preventDefault()


        const productId = e.target[0].value
        
        let deleteTwo = ()=>{
            axios.delete(`http://localhost:3000/products/${productId}`)
        }

        

        axios(`http://localhost:3000/products/${productId}`)
          .then((findd)=>{
            console.log(findd.data);
              if (findd.status === 200){
                const product = findd.data;
                setFind(
                    <div className="cards__del__fel">
                         <div className="cards__box__delete">
                             <div className="card">
                             
                                 <div className="card__left">
                                     <h4 className='card__left__h4'>АКЦИОННЫЙ ТОВАР</h4>
                                     <img className='card__img' src={product.image} alt="" />
                                 </div>
     
                                 <div className="card__right">
                                     <div className="card__right__30">
                                         <p>{product.sale}%</p>
                                     </div>
                                     <div className="card__name">
                                         <p className='card__right__asal'>{product.title}</p>
                                         <p className='card__price'>{product.price}.<span>{product.pricesmall}</span></p>
                                         <p className='card__price__uzs'>{product.valute}</p>
                                     </div>
                                 </div>
                           
                             </div>
                         </div>
                         <button onClick={(e)=>deleteTwo(e)} className='admin__panel__right__box__delete__btn'>Удалить</button>
                    </div>

                    

                )
              }
            })
            .catch((error)=>{
              setFind("Ошибка, товар не найден",error)
            });
        }

        // --------------------------------------------------------------------------------------------------------------------------

        let Change = (e)=>{
            e.preventDefault()
    
            let products = {
              title:e.target[1].value,
              image:e.target[2].value,
              price:e.target[3].value,
              pricesmall:e.target[4].value,
              valute:e.target[5].value,
              sale:e.target[6].value,
              isPromotion:e.target[7].value, 
              isNew:e.target[8].value, 
              description:e.target[9].value
            }
            axios.patch(`http://localhost:3000/products/${e.target[0].value}`,products)
        }
















    const Content = () => {
        if (nav === "add") {
            return (
              <div className='admin__panel__right__content1'>
                <h2 className='admin__panel__right__box__add'>Добавить Товар</h2>
                <form onSubmit={(e)=>addProduct(e) } className="admin__panel__right__box__add__form">
                    <input className='admin__panel__right__box__add__input' type="text" placeholder='Title' />
                    <input className='admin__panel__right__box__add__input' type="text" placeholder='Image'/>
                    <input className='admin__panel__right__box__add__input' type="text" placeholder='Price'/>
                    <input className='admin__panel__right__box__add__input' type="text" placeholder='Pricesmall'/>
                    <input className='admin__panel__right__box__add__input' type="text" placeholder='Valute' />
                    <input className='admin__panel__right__box__add__input' type="text" placeholder='Sale'/>
                    <input className='admin__panel__right__box__add__input' type="text" placeholder='Promotion'/>
                    <input className='admin__panel__right__box__add__input' type="text" placeholder='New' />
                    <input className='admin__panel__right__box__add__input' type="text" placeholder='Description'/>
                    <button className='admin__panel__right__box__add__form__btn'>Добавить товар</button>
                </form>
                {message && <p className='admin__panel__right__box__add__massage'>{message}</p>}
              </div>
            );


          } else if (nav === "change") {
            return (
              <div className='admin__panel__right__content3'>
                <h2 className='admin__panel__right__box__change'>Изменить Товар</h2>
                <form className='admin__panel__right__box__change__form' onSubmit={(e)=>Change(e)}>
                    <input className='admin__panel__right__box__change__input' type="text" placeholder='Введите id товара' />
                    <input className='admin__panel__right__box__change__input' type="text" placeholder='Title' />
                    <input className='admin__panel__right__box__change__input' type="text" placeholder='Image'/>
                    <input className='admin__panel__right__box__change__input' type="text" placeholder='Price'/>
                    <input className='admin__panel__right__box__change__input' type="text" placeholder='Pricesmall'/>
                    <input className='admin__panel__right__box__change__input' type="text" placeholder='Valute' />
                    <input className='admin__panel__right__box__change__input' type="text" placeholder='Sale'/>
                    <input className='admin__panel__right__box__change__input' type="text" placeholder='Promotion'/>
                    <input className='admin__panel__right__box__change__input' type="text" placeholder='New' />
                    <input className='admin__panel__right__box__change__input' type="text" placeholder='Description' />
                    <button className='admin__panel__right__box__change__btn'>Изменить</button>
                </form>
              </div>
            );


          } else if (nav === "delete") {
            return (
              <div className='admin__panel__right__content2'>
                <h2 className='admin__panel__right__box__delete'>Удалить Товар</h2>
                <div className="admin__panel__right__box__delete__inBox">

                    <form className='admin__panel__right__box__delete__form' onSubmit={(e)=>deleteOne(e)}>
                        <input className='admin__panel__right__box__delete__input' type="text" placeholder='Введите id товара' />
                        <button className='admin__panel__right__box__find__btn'>Найти товар</button>
                    </form>

                    <div className="admin__panel__right__box__delete__find">
                      {<p className='admin__panel__right__box__add__massage'>{find}</p>}   
                    </div>
                </div>
              </div>
            );


        } 
    };


    return (
        <main className='admin__panel'>
            <div className="container">
                <div className="admin_panel__box">

                    <div className="admin__panel__left__box">
                        <img className='admin__panel__left__box__photo' src={avatar} alt="" />
                        <h3 className='admin__panel__left__box__name'>Samantha</h3>
                        <p className='admin__panel__left__box__email'>samantha@email.com</p>
                        <ul className='admin__panel__left__box__nav'>
                            <li onClick={() => setNav('add')} className='admin__panel__left__box__nav__li'>Добавить Товар</li>
                            <li onClick={() => setNav('change')} className='admin__panel__left__box__nav__li'>Изменить Товар</li>
                            <li onClick={() => setNav('delete')} className='admin__panel__left__box__nav__li'>Удалить Товар</li>
                        </ul>
                        <button className='admin__panel__left__box__btn'><Link to={'/'}>Вернуться на главную</Link></button>
                    </div>
    
                    <div className="admin__panel__right__box">
                    {Content()}
                    </div>

                </div>
            </div>
        </main>
    );
};

export default AdminPanel;