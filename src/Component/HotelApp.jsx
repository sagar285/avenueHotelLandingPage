import React from 'react'
import Header from './Header';
import Hero from './Hero';
import Rooms from './Rooms';
import Amenities from './Amenities';
import Location from './Location';
import Reviews from './Review';
import Policies from './Policies';
import Footer from './Footer';
import Contact from './Contact';
import InstallAppButton from '../InstallAppButton';

const HotelApp = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <Hero />
      <Rooms />
      <Amenities />
      <Location />
      <Reviews/>
      <Policies />
      <Contact />
      <Footer />
    </div>
  );
};

export default HotelApp
