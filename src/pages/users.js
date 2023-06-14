import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import People from '../components/People';

import API_CONFIG from '../../config';

const { domain, endpoints } = API_CONFIG;



const Users = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <Header />

      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <People apiDomain={domain} apiEndpoint={endpoints.users} />


    
      </div>

      <Footer></Footer>
    </div>
  );
};

export default Users;