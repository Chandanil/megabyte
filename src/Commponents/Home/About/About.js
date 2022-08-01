import { Link } from "react-router-dom";
import "./About.scss";
export const About= () => {
    return (
        <div className="about-section">
            {/* <svg width="100%" height="100%" id="svg" viewBox="0 0 1440 500" xmlns="http://www.w3.org/2000/svg"
             class="transition duration-300 ease-in-out delay-150">
                <defs>
                    <linearGradient id="gradient" x1="5%" y1="27%" x2="95%" y2="73%">
                        <stop offset="5%" stop-color="#abb8c388">
                        </stop>
                        <stop offset="95%" stop-color="#edf0ff88">
                        </stop>
                    </linearGradient>
                </defs>
                <path d="M 0,500 C 0,500 0,166 0,166 C 101.35714285714286,140.60714285714286 202.71428571428572,
                    115.21428571428571 314,117 C 425.2857142857143,118.78571428571429 546.5000000000001,147.75 669,164 
                    C 791.4999999999999,180.25 915.2857142857142,183.78571428571428 1044,182 C 1172.7142857142858,180.21428571428572 
                    1306.357142857143,173.10714285714286 1440,166 C 1440,166 1440,500 1440,500 Z" stroke="none" stroke-width="0" 
                    fill="url(#gradient)" class="transition-all duration-300 ease-in-out delay-150 path-0">
                </path>
                <defs>
                    <linearGradient id="gradient" x1="5%" y1="27%" x2="95%" y2="73%">
                        <stop offset="5%" stop-color="#abb8c3ff"></stop>
                        <stop offset="95%" stop-color="#edf0ffff"></stop>
                    </linearGradient>
                </defs>
                <path d="M 0,500 C 0,500 0,333 0,333 C 144.78571428571428,320.1428571428571 289.57142857142856,307.2857142857143 421,319
                    C 552.4285714285714,330.7142857142857 670.5,367 766,361 C 861.5,355 934.4285714285713,306.7142857142857 1043,295 C 
                    1151.5714285714287,283.2857142857143 1295.7857142857142,308.1428571428571 1440,333 C 1440,333 1440,500 1440,500 Z" 
                    stroke="none"
                    stroke-width="0" fill="url(#gradient)" class="transition-all duration-300 ease-in-out delay-150 path-1">
                </path>
            </svg> */}
            <div className="container">
                <div className="row">
                    <div className="col-md-7 col-lg-8">
                        <div className="about-content">
                            <div className="cl-header">
                                <h2 className="title">Who <span>we</span> are ?</h2>
                            </div>
                            <p> Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                                Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque
                                penatibus et magnis dis parturient montes, nascetur ridiculus mus. 
                                Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. 
                                Nulla consequat massa quis enim. Donec pede justo, fringilla vel, 
                                aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, 
                                imperdiet a, venenatis vis eu pen, viverra quis, feu
                            </p>
                            <Link to="/" className="cl-btn">Read More</Link>
                        </div>
                    </div>
                    <div className="col-md-5 col-lg-4">
                        <div className="why-us">
                            <div className="cl-header">
                                <h2 className="title">Why Choose Us</h2>
                            </div>
                            <ul className="unorder-list">
                                <li>Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</li>
                                <li> Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut,</li>
                                <li>Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}