import React from 'react';
import Header from '../components/Header';
import Main from '../components/Main';
import Footer from '../components/Footer';
import Nav from '../components/Nav';

import ProductList from '../components/ProductList';

function Home() {
  return (
    <>
    <div>
      <Header />
      <Nav/>
      <Main />
      <Footer />
    </div>
    <div>
       <ProductList />
    </div>
    </>
  );
}

export default Home;
