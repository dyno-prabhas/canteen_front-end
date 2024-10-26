import React from 'react';
import CanteenMenu from '../CanteenMenu.js/CanteenMenu';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import HomeImage from '../HomeImage/HomeImage';

import './Home.css'

const Home = () => {

  return (

    <div>
    <Navbar />
    <HomeImage />

    <div className="home-container">
      

      <div className="home-links">
        

        {/* <Link to="/cart" className="home-link">
          View Cart
        </Link> */}

      </div>
      
        <CanteenMenu />
        <Footer />
    </div>
    </div>
  );
};

export default Home;
