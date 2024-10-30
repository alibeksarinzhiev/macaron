import React, { useEffect, useState } from 'react';
import './App.scss'

import Home from './Pages/Home/Home.jsx';
import Shop from './Pages/Shop/Shop.jsx';
import {Route,Routes } from 'react-router-dom';
import Single from './Pages/Single/Single.jsx';
import NotFound from './Pages/NotFound/NotFound.jsx';
import Layout from './Layout/Layout.jsx';
import About from './Pages/AboutUs/AboutUs.jsx'
import Carrier from './Pages/Carrier/Carrier.jsx'
import News from './Pages/News/News.js'
import Partners from './Pages/Partners/Partners.js'
import Recipe from './Pages/Recipe/Recipe.js'
import Search from './Pages/Search/Search.js'
import Special from './Pages/Special/Special.jsx'
import axios from 'axios';
import { getProducts } from './store/ProductsSlice/productsSlice.js';
import {useDispatch } from 'react-redux';
import Basket from './Pages/Basket/Basket.jsx';

const App = () => {

  
  const dispatch = useDispatch()
  const[products,setProducts] = useState([])
  console.log('as');

  useEffect(()=>{
   axios('http://localhost:3000/products')
  .then(({data})=>dispatch(getProducts(data)))
  },[])
  

 


    return (
    <>
    <Routes>
      <Route path='/' element={<Layout/>}>
      <Route path='' element={<Home />}/>
      <Route path='shop' element={<Shop/>}/>
      <Route path='about' element={<About/>}/>
      <Route path='carrier' element={<Carrier/>}/>
      <Route path='news' element={<News/>} />
      <Route path='partners' element={<Partners/>}/>
      <Route path='recipe' element={<Recipe/>}/>
      <Route path='carrier' element={<Carrier/>}/>
      <Route path='search' element={<Search/>}/>
      <Route path='special' element={<Special/>}/>
      <Route path='single/:id' element={<Single/>}/>
      <Route path='basket' element={<Basket/>}/>
      </Route>
      <Route path='*' element={<NotFound/>}/>
    </Routes>
      
      
    </>
    );
};

export default App;