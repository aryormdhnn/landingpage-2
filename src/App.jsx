
import React from 'react'
import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx';
import Feature from './components/Feature.jsx';
import Category from './components/Category.jsx';
import Product from './components/Product.jsx';
import Brand from './components/Brand.jsx';
import CTA from './components/Cta.jsx';
import Footer from './components/Footer.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {

  return (
    <>
      <Header />
      <Hero />
      <Feature />
      <Category />
      <Product />
      <Brand />
      <CTA />
      <Footer />
    </>
  )
}

export default App
