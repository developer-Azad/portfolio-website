import React from 'react';
import ContactMe from '../../ContactMe/ContactMe';
import MyProjects from '../../MyProjects/MyProjects';
import Banner from '../Banner/Banner';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <MyProjects></MyProjects>
            <ContactMe></ContactMe>
        </div>
    );
};

export default Home;