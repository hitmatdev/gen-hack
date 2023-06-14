import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Products from '../components/Products';
import Footer from '../components/Footer';

import API_CONFIG from '../../config';

const { domain, endpoints } = API_CONFIG;


const IndexPage = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <Header />

      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <Hero />
        <Products apiDomain={domain} apiEndpoint={endpoints.products} />

      
      </div>

      <Footer></Footer>
    </div>
  );
};

export default IndexPage;
