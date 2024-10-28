import React from 'react';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import QuestionMap from './QuestionMap/QuestionMap';
import { Outlet } from 'react-router-dom';

const Layout = () => {
    return (
        <>
           <Header/>
            <Outlet/>
           <QuestionMap/>
           <Footer/> 
        </>
    );
};

export default Layout;