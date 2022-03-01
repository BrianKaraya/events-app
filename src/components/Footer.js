import React from 'react';
// import { Button } from './Button';
import './Footer.css';
import { Link } from 'react-router-dom';
function Footer() {
  return (
    <div className="footer-container">
      <section className="footer-subscription">
        <div className="footer-heading">
          <p className="footer-subscription-heading">
            Join the Events newsletter to receive our best event deals.
          </p>
          <p className="footer-subscription-text">
            You can unsubscribe at any time.
          </p>
        </div>

        <div className="input-areas">
          <form>
            <input
              type="email"
              name="email"
              placeholder="Your email.."
              className="footer-input"
              required
            />
            <button className="footer-btn">Subscribe</button>
          </form>
        </div>
      </section>

      <section className="social-media">
        <div className="social-media-wrap">
          <div className="footer-logo">
            <Link className="website-footer-logo" to="/">
              Events
            </Link>
            {/* <small className="website-rights">Events 2021</small> */}
          </div>
        </div>
        <div className="social-icons">
          <Link
            className="social-icon-link"
            to="/"
            target="_blank"
            aria-label="facebook"
          >
            <i className="fab fa-facebook-f" />
          </Link>

          <Link
            className="social-icon-link"
            to="/"
            target="_blank"
            aria-label="instagram"
          >
            <i className="fab fa-instagram" />
          </Link>
          <Link
            className="social-icon-link"
            to="/"
            target="_blank"
            aria-label="youtube"
          >
            <i className="fab fa-youtube" />
          </Link>
          <Link
            className="social-icon-link"
            to="/"
            target="_blank"
            aria-label="twitter"
          >
            <i className="fab fa-twitter" />
          </Link>
        </div>
      </section>
    </div>
  );
}

export default Footer;
