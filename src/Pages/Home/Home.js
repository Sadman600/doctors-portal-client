import React from 'react';
import Appointment from './Appointment';
import Banner from './Banner';
import Footer from '../Shared/Footer';
import Info from './Info';
import Services from './Services';
import StayContactUs from './StayContactUs';
import Testimonial from './Testimonial';

const Home = () => {
    return (
        <div >
            <Banner></Banner>
            <Info></Info>
            <Services></Services>
            <Appointment></Appointment>
            <Testimonial></Testimonial>
            <StayContactUs></StayContactUs>
            <Footer></Footer>
        </div>
    );
};

export default Home;