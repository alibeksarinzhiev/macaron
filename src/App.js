import React, { useEffect, useState } from 'react';
import './App.scss'

import Home from './Pages/Home/Home';
import Shop from './Pages/Shop/Shop.js';
import {Route,Routes } from 'react-router-dom';
import Single from './Pages/Single/Single.js';
import NotFound from './Pages/NotFound/NotFound.js';
import Layout from './Layout/Layout.js';
import About from './Pages/AboutUs/AboutUs.js'
import Carrier from './Pages/Carrier/Carrier.js'
import Partners from './Pages/Partners/Partners.js'
import Recipe from './Pages/Recipe/Recipe.js'
import Search from './Pages/Search/Search.js'
import Special from './Pages/Special/Special.js'
import  Main  from './Pages/News/Main.jsx';

const App = () => {
   

    return (
    <>
    <Routes>
      <Route path='/' element={<Layout/>}>
      <Route path='' element={<Home/>}/>
      <Route path='shop' element={<Shop/>}/>
      <Route path='about' element={<About/>}/>
      <Route path='carrier' element={<Carrier/>}/>
      <Route path='news' element={<Main/>} />
      <Route path='partners' element={<Partners/>}/>
      <Route path='recipe' element={<Recipe/>}/>
      <Route path='carrier' element={<Carrier/>}/>
      <Route path='search' element={<Search/>}/>
      <Route path='special' element={<Special/>}/>
      </Route>
      <Route path='*' element={<NotFound/>}/>
    </Routes>
      
      
    </>
    );
};

export default App;