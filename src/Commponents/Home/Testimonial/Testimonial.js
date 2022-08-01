import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import "./Testimonial.scss";
export const Testimonial = () => {
    const testimonialCarousel = {
        nav: false,
        rewind: true,
        autoplay: true,
        center:true,
        responsive:{
            0:{
                items:1
            },
            600: {
                items: 2
            },
            900:{
                items:3
            },
        }
    };
    
    return (
        <div className="testi-section pd-section">
            <div className="container">
                <div className='cl-header text-center'>
                    <h2 className='title'>What <span>Our Client</span> Say</h2>
                </div>
            <OwlCarousel className='owl-theme testimonialCarousel' loop margin={10}  {...testimonialCarousel}>
                <div class='item'>
                    <div className='review-wrap'>
                        <div className='quote-icon'>
                            <i className='fa fa-quote-right'></i>
                        </div>
                        <div className='review-content-holder'>
                            <div className="review-content">
                                <h5 className='title'>Best Service</h5>
                                <p>In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo.
                                Nullam dictum felis eu pede mollis pretium. Integer tincidunt. </p>
                                <h2 className='name'>Chandani Lama</h2>
                            </div>
                        </div>
                        <div className="review-img">
                            <img src='/Images/review.jpg' />
                        </div>
                    </div>
                </div>
                <div class='item'>
                    <div className='review-wrap'>
                        <div className='quote-icon'>
                            <i className='fa fa-quote-right'></i>
                        </div>
                        <div className='review-content-holder'>
                            <div className="review-content">
                                <h5 className='title'>Best Service</h5>
                                <p>In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo.
                                Nullam dictum felis eu pede mollis pretium. Integer tincidunt. </p>
                                <h2 className='name'>Chandani Lama</h2>
                            </div>
                        </div>
                        <div className="review-img">
                            <img src='/Images/team.jpg' />
                        </div>
                    </div>
                </div>
                <div class='item'>
                    <div className='review-wrap'>
                        <div className='quote-icon'>
                            <i className='fa fa-quote-right'></i>
                        </div>
                        <div className='review-content-holder'>
                            <div className="review-content">
                                <h5 className='title'>Best Service</h5>
                                <p>In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo.
                                Nullam dictum felis eu pede mollis pretium. Integer tincidunt. </p>
                                <h2 className='name'>Chandani Lama</h2>
                            </div>
                        </div>
                        <div className="review-img">
                            <img src='/Images/review.jpg' />
                        </div>
                    </div>
                </div>
                <div class='item'>
                    <div className='review-wrap'>
                        <div className='quote-icon'>
                            <i className='fa fa-quote-right'></i>
                        </div>
                        <div className='review-content-holder'>
                            <div className="review-content">
                                <h5 className='title'>Best Service</h5>
                                <p>In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo.
                                Nullam dictum felis eu pede mollis pretium. Integer tincidunt. </p>
                                <h2 className='name'>Chandani Lama</h2>
                            </div>
                        </div>
                        <div className="review-img">
                            <img src='/Images/team.jpg' />
                        </div>
                    </div>
                </div>
            </OwlCarousel>
            </div>
        </div>
    )
}