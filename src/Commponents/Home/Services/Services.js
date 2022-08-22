import './Services.scss';
import {Link} from 'react-router-dom';
import React from 'react'; 
export const Services = () => {
    return (
        <div className="service-section pd-section">
            <div className="container">
                <div className="row">
                    <div className="col-sm-6 col-lg-3">
                        <div className="service-wrap">
                            <div className="service-icon">
                               <div className='icon'>
                               <img  src="Images/icon/design-thinking.png" />
                               </div>
                            </div>
                            <div className="service-content">
                               <Link to="/" className="title">Website Design</Link>
                                <p>We create beautiful websites that look visually
                                 appealing, user-friendly, and fit on any device.</p>
                            </div>
                        </div>
                       
                    </div>
                    <div className="col-sm-6 col-lg-3">
                        <div className="service-wrap">
                            <div className="service-icon bg-primary">
                               <div className='icon'>
                               <img  src="Images/icon/design-thinking.png" />
                               </div>
                            </div>
                            <div className="service-content">
                                <Link to="/" className="title"> Website Design</Link>
                                <p>We create beautiful websites that look visually
                                 appealing, user-friendly, and fit on any device.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6 col-lg-3">
                        <div className="service-wrap">
                            <div className="service-icon bg-info">
                               <div className='icon'>
                               <img  src="Images/icon/software-development.png" />
                               </div>
                            </div>
                            <div className="service-content">
                                <Link to="/" className="title">Web Development</Link>
                                <p>We create beautiful websites that look visually
                                 appealing, user-friendly, and fit on any device.</p>
                            </div>
                        </div>
                       
                    </div>
                    <div className="col-sm-6 col-lg-3">
                        <div className="service-wrap">
                            <div className="service-icon bg-danger">
                               <div className='icon'>
                               <img  src="Images/icon/app.png" />
                               </div>
                            </div>
                            <div className="service-content">
                                <Link to="/" className="title">Mobile App</Link>
                                <p>We create beautiful websites that look visually
                                 appealing, user-friendly, and fit on any device.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}