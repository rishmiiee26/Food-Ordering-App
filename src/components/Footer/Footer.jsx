import React, { useState, useEffect } from 'react';
import { ListGroup } from 'reactstrap';

import logo from '../../assets/images/res-logo.png';
import '../../styles/footer.css';

const Footer = () => {
  const [deliveryTime, setDeliveryTime] = useState(null);

  useEffect(() => {
    const dayOfWeek = new Date().getDay();
    if (dayOfWeek >= 1 && dayOfWeek <= 5) {
      setDeliveryTime({ days: 'Monday - Friday', time: '10:00am - 11:00pm' });
    } else {
      setDeliveryTime({ days: 'Saturday - Sunday', time: '2:00pm - 2:00am' });
    }
  }, []);

  return (
    <footer className="footer">
      <div className="footer__logo">
        <img src={logo} alt="logo" className="footer__logo-img" />
        <h5>Palate Paradise</h5>
        <p>Best Pizzas in town, try it out!</p>
      </div>
      <div>
        <h5 className="footer__title mb-3">Delivery Time</h5>
        {deliveryTime && (
          <ListGroup>
            <div className="delivery__time-item border-0 ps-0">
              <span>{deliveryTime.days}</span>
              <p>{deliveryTime.time}</p>
            </div>
          </ListGroup>
        )}
      </div>
      <div className="footer__social">
        <h5>Connect with Us</h5>
        <ul className="footer__social-links">
          <li>
            <a href="https://github.com/rishmiiee26" target="_blank" rel="noopener noreferrer" className="social-link">
              <i className="fab fa-github"></i>
              <span>GitHub</span>
            </a>
          </li>
          <li>
            <a href="mailto:palateparadise@gmail.com" target="_blank" rel="noopener noreferrer" className="social-link">
              <i className="far fa-envelope"></i>
              <span>Email</span>
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
