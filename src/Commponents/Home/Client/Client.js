import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import "./Client.scss";
import { Link } from 'react-router-dom';
export const Client= ()=> {
    const clientCarousel = {
        items: 1,
        nav: false,
        rewind: true,
        autoplay: true,
        center:true,
    };
    return(
        <div className="client-section">
            <div className="container">
                <div className='cl-header text-center'>
                    <h2 className='title'>Our Happy <span>Clients</span></h2>
                </div>
                <div className='d-flex'>
                    <div className="item">
                        <div className="client-wrap">
                            <Link to=""><img src="Images/client/snowpal.png"/></Link>
                        </div>
                    </div>
                    <div className="item">
                        <div className="client-wrap">
                            <Link to=""><img src="Images/client/nepalplanet.png"/></Link>
                        </div>
                    </div>
                    <div className="item">
                        <div className="client-wrap">
                            <Link to=""><img src="Images/client/snowpal.png"/></Link>
                        </div>
                    </div>
                    <div className="item">
                        <div className="client-wrap">
                            <Link to=""><img src="Images/client/nepalplanet.png"/></Link>
                        </div>
                    </div>
                </div>
                <Link to="/" className='cl-btn text-center'>View All <i className='fa fa-long-arrow-right'></i></Link>
            </div>
        </div>
    )
}