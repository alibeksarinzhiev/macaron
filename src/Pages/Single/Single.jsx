 import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import './Single.scss'
import { useDispatch } from 'react-redux';
import { add } from '../../store/BasketSlice/BasketSlice';

const Single = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    },[]);

    let arr = []
    // test

   const dispatch  = useDispatch()
   


    const location = useLocation()
   const [product,setProduct]= useState({})
    useEffect(()=>{
        axios(`http://localhost:3000/products/${location.pathname.replace('/single/','')}`)
        .then(({data})=>setProduct(data))
    },[])
    return (
        <section className='single'>
            <div className=" container">
                <div className="single__content">
                <div className="single__content-left">
                <img className='single__content-img' src={`../${product.image}`} alt="" />
                </div>
                   <div className="single__content-right">
                <h2 className='single__content-title'>{product.title}</h2>
                <p className='single__content-price'>{product.price}.<span>{product.pricesmall}</span></p>
                <p className='single__content-valute'>{product.valute}</p>
                <p className='single__content-des' >{product.description}</p>
                <button onClick={()=>dispatch(add({...product,count:1}))}>в корзину</button>
                </div>
                </div>
            </div>
        </section>
    );
};

export default Single;