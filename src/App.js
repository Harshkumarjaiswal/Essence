import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Shop from './pages/Shop';
import ProductDetails from './pages/ProductDetails';
import Checkout from './pages/Checkout';
import Blog from './pages/Blog';
import SingleBlog from './pages/SingleBlog';
import RegularPage from './pages/RegularPage';
import Contact from './pages/Contact';
import Cart from './pages/Cart';

// Women's Collection
import Dresses from './pages/women/Dresses';
import Blouses from './pages/women/Blouses';
import Tshirts from './pages/women/Tshirts';
import Rompers from './pages/women/Rompers';
import Lingerie from './pages/women/Lingerie';

// Men's Collection
import MensTshirts from './pages/men/MensTshirts';
import MensPolo from './pages/men/MensPolo';
import MensShirts from './pages/men/MensShirts';
import MensJackets from './pages/men/MensJackets';
import MensTrench from './pages/men/MensTrench';

// Kids' Collection
import KidsDresses from './pages/kids/KidsDresses';
import KidsShirts from './pages/kids/KidsShirts';
import KidsTshirts from './pages/kids/KidsTshirts';
import KidsJackets from './pages/kids/KidsJackets';
import KidsTrench from './pages/kids/KidsTrench';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/single-product-details" element={<ProductDetails />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/single-blog" element={<SingleBlog />} />
        <Route path="/regular-page" element={<RegularPage />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/cart" element={<Cart />} />
        
        {/* Women's Collection Routes */}
        <Route path="/dresses" element={<Dresses />} />
        <Route path="/blouses" element={<Blouses />} />
        <Route path="/tshirts" element={<Tshirts />} />
        <Route path="/rompers" element={<Rompers />} />
        <Route path="/lingerie" element={<Lingerie />} />
        
        {/* Men's Collection Routes */}
        <Route path="/mens-tshirts" element={<MensTshirts />} />
        <Route path="/mens-polo" element={<MensPolo />} />
        <Route path="/mens-shirts" element={<MensShirts />} />
        <Route path="/mens-jackets" element={<MensJackets />} />
        <Route path="/mens-trench" element={<MensTrench />} />
        
        {/* Kids' Collection Routes */}
        <Route path="/kids-dresses" element={<KidsDresses />} />
        <Route path="/kids-shirts" element={<KidsShirts />} />
        <Route path="/kids-tshirts" element={<KidsTshirts />} />
        <Route path="/kids-jackets" element={<KidsJackets />} />
        <Route path="/kids-trench" element={<KidsTrench />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App; 