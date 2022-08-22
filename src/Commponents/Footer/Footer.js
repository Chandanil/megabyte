import { Link } from 'react-router-dom';
import "./Footer.scss";
import React from 'react'; 
export const Footer = () => {
    return(
        <div className="site-footer">
            <div className="container">
                <div className='mid-footer'>
                    <div className="row ">
                        <div className="col-md-6 col-lg-3">
                            <div className='footer-info'>
                                <i className='fa fa-phone icon'></i>
                                <Link to="">9764642345654</Link>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-3">
                            <div className='footer-info'>
                                <i className='fa fa-envelope icon'></i>
                                <Link to="">info@gmail.com</Link>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-3">
                            <div className='footer-info'>
                                <i className='fa fa-whatsapp icon'></i>
                                <Link to="">9764642345654</Link>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-3">
                            <div className='footer-info'>
                                <ul className="social-icon">
                                    <li>
                                        <Link to="/fb" className="fb icon"><i className="fa fa-facebook"></i></Link>
                                    </li>
                                    <li>
                                        <Link to="/fb" className="ln icon"><i className="fa fa-linkedin"></i></Link>
                                    </li>
                                    <li>
                                        <Link to="/fb" className="insta icon"><i className="fa fa-instagram"></i></Link>
                                    </li>
                                    <li>
                                        <Link to="/fb" className="tw icon"><i className="fa fa-twitter"></i></Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='bottom-footer'>
                    <ul>
                        <li>
                            <Link to="" className="footer-item">Services</Link>
                        </li>
                        <li>
                            <Link to="" className="footer-item">Price</Link>
                        </li>
                        <li>
                            <Link to="" className="footer-item">FAQs</Link>
                        </li>
                        <li>
                            <Link to="" className="footer-item">Blog</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}