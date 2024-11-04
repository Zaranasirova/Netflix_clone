import React from 'react';
import Header from '../Components/Header';
import Hero from './section/Hero';
import CardsSection from './section/CardsSection';
import Footer from '../Components/Footer';

const Home = () => {
  return (
    <>
    <Header/>
      <Hero />
      <CardsSection />
      <Footer/>
    </>
  )
}

export default Home