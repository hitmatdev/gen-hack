import React from 'react';
import Header from '../components/Header';

import Footer from '../components/Footer';






const PageNotFound = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <Header />

      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
     
      <h1>Page not found</h1>

    
      </div>

      <Footer></Footer>
    </div>
  );
};

export default PageNotFound;