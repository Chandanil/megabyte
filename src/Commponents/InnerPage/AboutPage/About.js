import Container from "react-bootstrap/esm/Container";
import { BreadCrumb } from "../../BreadCrumb/BreadCrumb";
import './About.scss';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ReactOwlCarousel from "react-owl-carousel";
import React from 'react'; 
export const About = () => {
    const team = {
        nav: false,
        rewind: true,
        autoplay: true,
        dots: true,
        responsive:{
            0:{
                items:1
            },
            600: {
                items: 2
            },
            900:{
                items:4
            },
        }
    };
    
    return (
        <>
            <BreadCrumb first="Home" second="About"/>
            <div className="innerabout-section pd-section">
                <Container>
                    <div className="intro">
                        <Row >
                            <Col lg={4}>
                                <img src="Images/about1.png" />
                            </Col>
                            <Col lg={8}>
                                <div className="cl-header">
                                    <h2 className="title">Inspiring <span>Businesses</span> With IT Solutions</h2>
                                </div>
                                <p>Lorem ipsum dolor sit amet, <strong>consectetuer adipiscing elit.</strong> Aenean commodo ligula eget dolor. Aenean massa.
                                     Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis,
                                      ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, 
                                      fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis 
                                      vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus 
                                      elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat 
                                      vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus 
                                      viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel 
                                      augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. 
                                 </p>
                                 <div className="working-step">
                                    <Row>
                                        <Col sm={6} lg={3}>
                                            <div className="step-wrapper">
                                                <div className="img-wrap">
                                                    <img src="Images/icon/data-collection.png" />
                                                    <span className="rank">1</span>
                                                </div>
                                                <h6 className="title">Collecting Requirments</h6>
                                            </div>
                                        </Col>
                                        <Col sm={6} lg={3}>
                                            <div className="step-wrapper">
                                                <div className="img-wrap">
                                                    <img src="Images/icon/design-development.png" />
                                                    <span className="rank">2</span>
                                                </div>
                                                <h6 className="title">Design & Developments</h6>
                                            </div>
                                        </Col>
                                        <Col sm={6} lg={3}>
                                            <div className="step-wrapper">
                                                <div className="img-wrap">
                                                    <img src="Images/icon/qa.png" />
                                                    <span className="rank">3</span>
                                                </div>
                                                <h6 className="title">Quality Assurance</h6>
                                            </div>
                                        </Col>
                                        <Col sm={6} lg={3}>
                                            <div className="step-wrapper">
                                                <div className="img-wrap">
                                                    <img src="Images/icon/data-collection.png" />
                                                    <span className="rank">4</span>
                                                </div>
                                                <h6 className="title">Collecting Requirments</h6>
                                            </div>
                                        </Col>
                                    </Row>
                                </div>
                            </Col>
                        </Row>
                    </div>
                    <div className="mission-vission">
                        <Row>
                            <Col md={6}>
                                <div className="mission-wrap same-wrap">
                                    <i className="fa fa-bullseye icon"></i>
                                   <div className="content">
                                        <div className="cl-header">
                                            <h2 className="sub-title">Our Mission</h2>
                                        </div>
                                        <p>Lorem ipsum dolor sit amet,enean imperdiet. Etiam ultricies nisi vel  Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget
                                       condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, 
                                       blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus. Donec 
                                       vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus 
                                       tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna. Sed consequat
                                       , leo eget bibendum sodales, augue velit cursus nunc,
                                    </p>
                                   </div>
                                </div>
                            </Col>
                            <Col md={6}>
                                <div className="mission-wrap same-wrap">
                                    <i className="fa fa-eye icon"></i>
                                   <div className="content">
                                        <div className="cl-header">
                                            <h2 className="sub-title">Our Vision</h2>
                                        </div>
                                        <p>Lorem ipsum dolor sit amet,enean imperdiet. Etiam ultricies nisi vel  Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget
                                       condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, 
                                       blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus. Donec 
                                       vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus 
                                       tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna. Sed consequat
                                       , leo eget bibendum sodales, augue velit cursus nunc,
                                    </p>
                                   </div>
                                </div>
                            </Col>
                        </Row>
                    </div>
                    <div className="techno-we-used">
                        <div className="cl-header text-center">
                            <h2 className="sub-title">
                                Tools & Technologies
                            </h2>
                        </div>
                       <Row>
                            <Col xs={6} sm={4} md={3} lg={2}>
                                <div className="techno-wrap">
                                    <img src="Images/logo/php.png" />
                                </div>
                            </Col>
                            <Col xs={6} sm={4} md={3} lg={2}>
                                <div className="techno-wrap">
                                    <img src="Images/logo/laravel.png" />
                                </div>
                            </Col>
                            <Col xs={6} sm={4} md={3} lg={2}>
                                <div className="techno-wrap">
                                    <img src="Images/logo/react.png" />
                                </div>
                            </Col>
                            <Col xs={6} sm={4} md={3} lg={2}>
                                <div className="techno-wrap">
                                    <img src="Images/logo/android.png" />
                                </div>
                            </Col>
                            <Col xs={6} sm={4} md={3} lg={2}>
                                <div className="techno-wrap">
                                    <img src="Images/logo/html.png" />
                                </div>
                            </Col>
                            <Col xs={6} sm={4} md={3} lg={2}>
                                <div className="techno-wrap">
                                    <img src="Images/logo/css.png" />
                                </div>
                            </Col>
                            <Col xs={6} sm={4} md={3} lg={2}>
                                <div className="techno-wrap">
                                    <img src="Images/logo/sass.png" />
                                </div>
                            </Col>
                            <Col xs={6} sm={4} md={3} lg={2}>
                                <div className="techno-wrap">
                                    <img src="Images/logo/figma.png" />
                                </div>
                            </Col>
                            <Col xs={6} sm={4} md={3} lg={2}>
                                <div className="techno-wrap">
                                    <img src="Images/logo/xd.png" />
                                </div>
                            </Col>
                            <Col xs={6} sm={4} md={3} lg={2}>
                                <div className="techno-wrap">
                                    <img src="Images/logo/photoshop.png" />
                                </div>
                            </Col>
                            <Col xs={6} sm={4} md={3} lg={2}>
                                <div className="techno-wrap">
                                    <img src="Images/logo/jquery.png" />
                                </div>
                            </Col>
                            <Col xs={6} sm={4} md={3} lg={2}>
                                <div className="techno-wrap">
                                    <img src="Images/logo/wp.png" />
                                </div>
                            </Col>
                       </Row>
                    </div>
                    <div className="our-team">
                        <div className="cl-header text-center">
                            <h2 className="sub-title">Meet Our <span>Team</span></h2>
                        </div>
                        <ReactOwlCarousel className='owl-theme teamCarousel' loop margin={10}  {...team}>
                            <div class='item'>
                                <div className="team-wrap">
                                    <div className="img-wrap">
                                        <img src="Images/team/chandani.png" />
                                    </div>
                                    <div className="content">
                                        <h6 className="name">Chandani Lama</h6>
                                        <span>FrontEnd Developer</span>
                                    </div>
                                </div>
                            </div>
                            <div class='item'>
                                <div className="team-wrap">
                                    <div className="img-wrap">
                                        <img src="Images/team/chandani.png" />
                                    </div>
                                    <div className="content">
                                        <h6 className="name">Chandani Lama</h6>
                                        <span>FrontEnd Developer</span>
                                    </div>
                                </div>
                            </div>
                            <div class='item'>
                                <div className="team-wrap">
                                    <div className="img-wrap">
                                        <img src="Images/team/chandani.png" />
                                    </div>
                                    <div className="content">
                                        <h6 className="name">Chandani Lama</h6>
                                        <span>FrontEnd Developer</span>
                                    </div>
                                </div>
                            </div>
                            <div class='item'>
                                <div className="team-wrap">
                                    <div className="img-wrap">
                                        <img src="Images/team/chandani.png" />
                                    </div>
                                    <div className="content">
                                        <h6 className="name">Chandani Lama</h6>
                                        <span>FrontEnd Developer</span>
                                    </div>
                                </div>
                            </div>
                        </ReactOwlCarousel>
                    </div>
                </Container>
            </div>
        </>
    )
}