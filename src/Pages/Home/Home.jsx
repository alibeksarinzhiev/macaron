import React from 'react';
import Banner from './Banner/Banner';
import Cards from './Cards/Cards';
import Us from './Us/Us';
import About from './About/About';
import NewsHome from './NewsHome/NewsHome';

const Home = () => {
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