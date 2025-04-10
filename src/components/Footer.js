import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer_area clearfix">
      <div className="footer-widgets-area">
        <div className="container">
          <div className="row">
            {/* Single Footer Widget */}
            <div className="col-12 col-md-6 col-lg-3">
              <div className="single-footer-widget">
                <h6 className="widget-title">About Us</h6>
                <div className="widget-content">
                  <p>Essence is a premium fashion e-commerce platform offering the latest trends in women's, men's, and kids' clothing.</p>
                </div>
              </div>
            </div>

            {/* Single Footer Widget */}
            <div className="col-12 col-md-6 col-lg-3">
              <div className="single-footer-widget">
                <h6 className="widget-title">Quick Links</h6>
                <div className="widget-content">
                  <ul className="footer-links">
                    <li><Link to="/about">About Us</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                    <li><Link to="/blog">Blog</Link></li>
                    <li><Link to="/shop">Shop</Link></li>
                    <li><Link to="/faq">FAQ</Link></li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Single Footer Widget */}
            <div className="col-12 col-md-6 col-lg-3">
              <div className="single-footer-widget">
                <h6 className="widget-title">Contact Info</h6>
                <div className="widget-content">
                  <ul className="footer-contact">
                    <li><i className="fa fa-map-marker"></i> 123 Fashion Street, New York, NY 10001</li>
                    <li><i className="fa fa-phone"></i> +1 (555) 123-4567</li>
                    <li><i className="fa fa-envelope"></i> info@essence.com</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Single Footer Widget */}
            <div className="col-12 col-md-6 col-lg-3">
              <div className="single-footer-widget">
                <h6 className="widget-title">Newsletter</h6>
                <div className="widget-content">
                  <p>Subscribe to our newsletter for updates and exclusive offers.</p>
                  <form action="#" method="post">
                    <input type="email" name="email" className="form-control" placeholder="Your email address" required />
                    <button type="submit" className="btn essence-btn">Subscribe</button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-12 col-md-6">
              <p className="copywrite">
                &copy; {new Date().getFullYear()} Essence. All rights reserved.
              </p>
            </div>
            <div className="col-12 col-md-6">
              <div className="footer-social-info">
                <a href="#" className="facebook"><i className="fa fa-facebook"></i></a>
                <a href="#" className="twitter"><i className="fa fa-twitter"></i></a>
                <a href="#" className="google-plus"><i className="fa fa-google-plus"></i></a>
                <a href="#" className="instagram"><i className="fa fa-instagram"></i></a>
                <a href="#" className="youtube"><i className="fa fa-youtube"></i></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 