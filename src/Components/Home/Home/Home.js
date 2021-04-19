import React from 'react';
import Blogs from '../Blogs/Blogs';
import ContactInfo from '../ContactInfo/ContactInfo';
import Experts from '../Experts/Experts';
import FeaturedService from '../FeaturedService/FeaturedService';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Services from '../Services/Services';
import Testimonials from '../Testimonials/Testimonials';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Services></Services>
            <FeaturedService></FeaturedService>
            <Experts></Experts>
            <Testimonials></Testimonials>
            <ContactInfo></ContactInfo>
            <Blogs></Blogs>
            <Footer></Footer>

      
           
        </div>
    );
};

export default Home;