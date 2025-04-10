import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);

  useEffect(() => {
    // Initialize any jQuery plugins or scripts here
    // This is a placeholder for the actual initialization code
    const initScripts = () => {
      // Example: Initialize classy nav
      if (window.jQuery) {
        // jQuery code would go here
      }
    };

    initScripts();
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  return (
    <>
      {/* Header Area Start */}
      <header className="header_area">
        <div className="classy-nav-container breakpoint-off d-flex align-items-center justify-content-between">
          {/* Classy Menu */}
          <nav className="classy-navbar" id="essenceNav">
            {/* Logo */}
            <Link className="nav-brand" to="/">
              <img src="/img/core-img/logo.png" alt="Essence Logo" />
            </Link>
            
            {/* Navbar Toggler */}
            <div className="classy-navbar-toggler" onClick={toggleMenu}>
              <span className="navbarToggler">
                <span></span>
                <span></span>
                <span></span>
              </span>
            </div>
            
            {/* Menu */}
            <div className={`classy-menu ${isMenuOpen ? 'menu-on' : ''}`}>
              {/* close btn */}
              <div className="classycloseIcon" onClick={toggleMenu}>
                <div className="cross-wrap">
                  <span className="top"></span>
                  <span className="bottom"></span>
                </div>
              </div>
              
              {/* Nav Start */}
              <div className="classynav">
                <ul>
                  <li>
                    <Link to="#">Shop</Link>
                    <div className="megamenu">
                      <ul className="single-mega cn-col-4">
                        <li className="title">Women's Collection</li>
                        <li><Link to="/dresses">Dresses</Link></li>
                        <li><Link to="/blouses">Blouses &amp; Shirts</Link></li>
                        <li><Link to="/tshirts">T-shirts</Link></li>
                        <li><Link to="/rompers">Rompers</Link></li>
                        <li><Link to="/lingerie">Bras &amp; Panties</Link></li>
                      </ul>
                      <ul className="single-mega cn-col-4">
                        <li className="title">Men's Collection</li>
                        <li><Link to="/mens-tshirts">T-Shirts</Link></li>
                        <li><Link to="/mens-polo">Polo</Link></li>
                        <li><Link to="/mens-shirts">Shirts</Link></li>
                        <li><Link to="/mens-jackets">Jackets</Link></li>
                        <li><Link to="/mens-trench">Trench</Link></li>
                      </ul>
                      <ul className="single-mega cn-col-4">
                        <li className="title">Kid's Collection</li>
                        <li><Link to="/kids-dresses">Dresses</Link></li>
                        <li><Link to="/kids-shirts">Shirts</Link></li>
                        <li><Link to="/kids-tshirts">T-shirts</Link></li>
                        <li><Link to="/kids-jackets">Jackets</Link></li>
                        <li><Link to="/kids-trench">Trench</Link></li>
                      </ul>
                      <div className="single-mega cn-col-4">
                        <img src="/img/bg-img/bg-6.jpg" alt="" />
                      </div>
                    </div>
                  </li>
                  <li>
                    <Link to="#">Pages</Link>
                    <ul className="dropdown">
                      <li><Link to="/">Home</Link></li>
                      <li><Link to="/shop">Shop</Link></li>
                      <li><Link to="/single-product-details">Product Details</Link></li>
                      <li><Link to="/checkout">Checkout</Link></li>
                      <li><Link to="/blog">Blog</Link></li>
                      <li><Link to="/single-blog">Single Blog</Link></li>
                      <li><Link to="/regular-page">Regular Page</Link></li>
                      <li><Link to="/contact">Contact</Link></li>
                    </ul>
                  </li>
                  <li><Link to="/blog">Blog</Link></li>
                  <li><Link to="/contact">Contact</Link></li>
                </ul>
              </div>
              {/* Nav End */}
            </div>
          </nav>

          {/* Header Meta Data */}
          <div className="header-meta d-flex clearfix justify-content-end">
            {/* Search Area */}
            <div className="search-area">
              <form action="#" method="post">
                <input type="search" name="search" id="headerSearch" placeholder="Type for search" />
                <button type="submit" title="Search">
                  <i className="fa fa-search" aria-hidden="true"></i>
                </button>
              </form>
            </div>
            
            {/* Favourite Area */}
            <div className="favourite-area">
              <Link to="#"><img src="/img/core-img/heart.svg" alt="" /></Link>
            </div>
            
            {/* User Login Info */}
            <div className="user-login-info">
              <Link to="#"><img src="/img/core-img/user.svg" alt="" /></Link>
            </div>
            
            {/* Cart Area */}
            <div className="cart-area">
              <Link to="/cart" id="essenceCartBtn" onClick={toggleCart}>
                <img src="/img/core-img/bag.svg" alt="" /> <span>3</span>
              </Link>
            </div>
          </div>
        </div>
      </header>
      {/* Header Area End */}

      {/* Right Side Cart Area */}
      <div className={`cart-bg-overlay ${isCartOpen ? 'active' : ''}`} onClick={toggleCart}></div>

      <div className={`right-side-cart-area ${isCartOpen ? 'active' : ''}`}>
        {/* Cart Button */}
        <div className="cart-button">
          <Link to="#" id="rightSideCart" onClick={toggleCart}>
            <img src="/img/core-img/bag.svg" alt="" /> <span>3</span>
          </Link>
        </div>

        <div className="cart-content d-flex">
          {/* Cart List Area */}
          <div className="cart-list">
            {/* Single Cart Item */}
            <div className="single-cart-item">
              <Link to="#" className="product-image">
                <img src="/img/product-img/product-1.jpg" className="cart-thumb" alt="" />
                {/* Cart Item Desc */}
                <div className="cart-item-desc">
                  <span className="product-remove">
                    <i className="fa fa-close" aria-hidden="true"></i>
                  </span>
                  <span className="badge">Essence</span>
                  <h6>White Summer Dress</h6>
                  <p className="size">Size: XS</p>
                  <p className="color">Color: White</p>
                  <p className="price">$45.00</p>
                </div>
              </Link>
            </div>
          </div>

          {/* Cart Summary */}
          <div className="cart-amount-summary">
            <h2>Summary</h2>
            <ul className="summary-table">
              <li><span>subtotal:</span> <span>$274.00</span></li>
              <li><span>delivery:</span> <span>Free</span></li>
              <li><span>discount:</span> <span>-15%</span></li>
              <li><span>total:</span> <span>$232.00</span></li>
            </ul>
            <div className="checkout-btn mt-100">
              <Link to="/checkout" className="btn essence-btn">check out</Link>
            </div>
          </div>
        </div>
      </div>
      {/* Right Side Cart End */}
    </>
  );
};

export default Header; 