import Carousel from 'react-bootstrap/Carousel';
import "./Banner.scss";
export const Banner = () => {
    return (
         <div className="clBanner">
            <svg width="100%" height="100%" id="svg" viewBox="0 0 1440 470" xmlns="http://www.w3.org/2000/svg" 
             class="transition duration-300 ease-in-out delay-150">
                <defs>
                    <linearGradient id="gradient" x1="0%" y1="50%" x2="100%" y2="50%"><stop offset="5%"
                        stop-color="#f9faffff"></stop><stop offset="95%" stop-color="#edf0ffff"></stop></linearGradient>
                </defs>
                <path d="M 0,700 C 0,700 0,350 0,350 C 140.1428571428571,319.82142857142856 280.2857142857142,289.64285714285717 
                    402,307 C 523.7142857142858,324.35714285714283 627.0000000000002,389.25 732,371 C 836.9999999999998,352.75 943.7142857142856,2
                    51.35714285714286 1062,234 C 1180.2857142857144,216.64285714285714 1310.1428571428573,283.32142857142856 1440,350 C 1440,350 1
                    440,700 1440,700 Z" stroke="none" stroke-width="0" fill="url(#gradient)"
                    class="transition-all duration-300 ease-in-out delay-150 path-0" transform="rotate(-180 720 350)">
                </path>
            </svg>
            <Carousel className="banner-carousel">
                <Carousel.Item className="bannerContent" >
                    <div className='container'>
                        <div className='row'>
                            <div className="col-md-7">
                                <div className="bannerCaption">
                                    <h1 className="title">Web-based <span>Publising System</span></h1>
                                    <p>Hi hello to everyone i am chandani lama from bhaktapur,
                                        but my original birth place is panckhal tinpiple kavre </p>
                                    <a href="" className="cl-btn">Read More</a>
                                </div>
                            </div>
                            <div className="col-sm-none col-md-5">
                                <div className="bannerImage">
                                    <img src="Images/banner.png" />
                                </div>
                            </div>
                        </div>
                   </div>
                </Carousel.Item>
                <Carousel.Item className="bannerContent" >
                    <div className='container'>
                        <div className='row'>
                            <div className="col-md-7">
                                <div className="bannerCaption">
                                    <h1 className="title">Web-based <span>Publising System</span></h1>
                                    <p>Hi hello to everyone i am chandani lama from bhaktapur,
                                        but my original birth place is panckhal tinpiple kavre </p>
                                    <a href="" className="cl-btn">Read More</a>
                                </div>
                            </div>
                            <div className="col-md-5">
                                <div className="bannerImage">
                                    <img src="Images/banner.png" />
                                </div>
                            </div>
                        </div>
                   </div>
                </Carousel.Item>
                <Carousel.Item className="bannerContent" >
                    <div className='container'>
                        <div className='row'>
                            <div className="col-md-7">
                                <div className="bannerCaption">
                                    <h1 className="title">Web-based <span>Publising System</span></h1>
                                    <p>Hi hello to everyone i am chandani lama from bhaktapur,
                                        but my original birth place is panckhal tinpiple kavre </p>
                                    <a href="" className="cl-btn">Read More</a>
                                </div>
                            </div>
                            <div className="col-md-5">
                                <div className="bannerImage">
                                    <img src="Images/banner.png" />
                                </div>
                            </div>
                        </div>
                   </div>
                </Carousel.Item>
            </Carousel>
       </div>
    )
}