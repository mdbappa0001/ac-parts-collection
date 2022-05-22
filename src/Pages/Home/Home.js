import React from 'react';
import About from './About';
import Banner from './Banner';
import BusinessSummary from './BusinessSummary';
import ContactUs from './ContactUs';
import Parts from './Parts';
import Reviews from './Reviews';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <About></About>
            <Parts></Parts>
            <BusinessSummary></BusinessSummary>
            <Reviews></Reviews>
            <ContactUs></ContactUs>
        </div>
    );
};

export default Home;