import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import './Single.scss'
import { useDispatch } from 'react-redux';
import { add } from '../../store/BasketSlice/BasketSlice';

const Single = () => {

    let arr = []

   const dispatch  = useDispatch()
   


    const location = useLocation()
   const [product,setProduct]= useState({})
    useEffect(()=>{
        axios(`http://localhost:3000/products/${location.pathname.replace('/single/','')}`)
        .then(({data})=>setProduct(data))
    },[])
    return (
        <section className='single'>
            <div className="container">
                <img src={`../${product.image}`} alt="" />
                <h2>{product.title}</h2>
                <p>{product.description}</p>
                <button onClick={()=>dispatch(add({...product,count:1}))}>в корзину</button>
            </div>
        </section>
    );
};

export default Single;