import './Portfolio.scss';
import {Link} from 'react-router-dom';
import React from 'react'; 
export const Portfolio = () => {
    return (
        <div className="pf-section pd-section">
            <div className="container">
                <div className="row">
                    <div className="cl-col col-sm-6 col-md-4 col-lg-3">
                        <figure className='port-effect'>
                            <Link to="/snowpal">
                                <img src='Images/Portfolio/snowpal.png'/>
                                <figcaption>
                                    <span className='title'>Snowpal Trek</span>
                                </figcaption>
                            </Link>
                        </figure>
                    </div>
                    <div className="cl-col col-sm-6 col-md-4 col-lg-3">
                        <figure className='port-effect'>
                            <Link to="/portfolio">
                                <img src='Images/Portfolio/portfolio.png'/>
                                <figcaption>
                                    <span className='title'>Snowpal Trek</span>
                                </figcaption>
                            </Link>
                        </figure>
                    </div>
                    <div className="cl-col col-sm-6 col-md-4 col-lg-3">
                        <figure className='port-effect'>
                            <Link to="">
                                <img src='Images/Portfolio/snowpal.png'/>
                                <figcaption>
                                    <span className='title'>Snowpal Trek</span>
                                </figcaption>
                            </Link>
                        </figure>
                    </div>
                    <div className="cl-col col-sm-6 col-md-4 col-lg-3">
                        <figure className='port-effect'>
                            <Link to="">
                                <img src='Images/Portfolio/portfolio.png'/>
                                <figcaption>
                                    <span className='title'>Snowpal Trek</span>
                                </figcaption>
                            </Link>
                        </figure>
                    </div>
                </div>
                <div className='text-center'>
                    <Link to ="/portfolio" className="cl-btn cl-btn-reverse ">View All Work</Link>
                </div>
            </div>
        </div>
    )
}