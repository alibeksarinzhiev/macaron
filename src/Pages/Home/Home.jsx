import React, { useEffect } from 'react';
import Banner from './Banner/Banner';
import Cards from './Cards/Cards';
import Us from './Us/Us';
import About from './About/About';
import NewsHome from './NewsHome/NewsHome';

const Home = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    },[]);

    return (
        <>
            <Banner/>
            <Cards/>
            <Us/>
            <About/>
            <NewsHome/>
        </>
    );
};

export default Home;