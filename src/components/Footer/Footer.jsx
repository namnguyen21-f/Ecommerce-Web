import React, { useState } from 'react';
import { Link} from 'react-router-dom';
import './styles.css'


const Footer = ({  }) => {
  return (
    <div className="footer">
        <div className="heading">
            <h2>Commerce<sup>&trade;</sup></h2>
        </div>
        <div className="content">
            <div className="services">
                <h4>Services</h4>
                <p><Link to='/'>App development</Link></p>
                <p><Link to='/'>App development</Link></p>
                <p><Link to='/'>App development</Link></p>
                <p><Link to='/'>App development</Link></p>
            </div>
            <div className="social-media">
                <h4>Social</h4>
                <p>
                    <a href="https://www.facebook.com/profile.php?id=100055498025101"
                    ><i className="fab fa-linkedin"></i> Linkedin</a
                    >
                </p>
                <p>
                    <a href="https://www.facebook.com/profile.php?id=100055498025101"
                    ><i className="fab fa-twitter"></i> Facebook</a
                    >
                </p>
                <p>
                    <a href="https://github.com/namnguyen21-f"
                    ><i className="fab fa-github"></i> Github</a
                    >
                </p>
                <p>
                    <a href="https://www.facebook.com/profile.php?id=100055498025101"
                    ><i className="fab fa-instagram"></i> Instagram</a
                    >
                </p>
            </div>
            <div className="links">
                <h4>Quick links</h4>
                <p><a href="#">Home</a></p>
                <p><a href="#">About</a></p>
                <p><a href="#">Blogs</a></p>
                <p><a href="#">Contact</a></p>
            </div>
            <div className="details">
                <h4 className="address">Address</h4>
                <p>
                    Lorem ipsum dolor sit amet consectetur <br />
                    adipisicing elit. Cupiditate, qui!
                </p>
                <h4 className="mobile">Mobile</h4>
                <p>+9112233445</p>
                <h4 className="mail">Email</h4>
                <p>abcdef@gmail.com</p>
            </div>
        </div>
        <footer>
            <hr />
            &copy; 2021 ABCDEF Technologies Pvt. Ltd.
        </footer>
    </div>
  );
};

export default Footer;