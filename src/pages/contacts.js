import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Registration from '../components/Registration';

import API_CONFIG from '../../config';

const { domain, endpoints } = API_CONFIG;



const Contacts = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <Header />

      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
    <Registration apiDomain={domain} apiEndpoint={endpoints.http_post}></Registration>


    
      </div>

      <Footer></Footer>
    </div>
  );
};

export default Contacts;