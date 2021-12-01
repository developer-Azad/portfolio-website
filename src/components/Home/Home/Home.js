import React from 'react';
import AboutMe from '../../AboutMe/AboutMe';
import ContactMe from '../../ContactMe/ContactMe';
import Footer from '../../Footer/Footer';
import MyProjects from '../../MyProjects/MyProjects';
import MySkills from '../../MySkills/MySkills';
import Banner from '../Banner/Banner';
import './Home.css'

const Home = () => {
    return (
        <div className="home">
            <Banner></Banner>
            <AboutMe></AboutMe>
            <MySkills></MySkills>
            <MyProjects></MyProjects>
            <ContactMe></ContactMe>
            <Footer></Footer>
        </div>
    );
};

export default Home;