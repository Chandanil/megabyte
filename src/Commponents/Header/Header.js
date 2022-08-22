import "./Header.scss";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import React,{ useState } from "react";
import { Link } from "react-router-dom";

export const  Header = () => {
  const [showSearch, setShowSearch] = useState ();
  const menu = [
    {item:'Home', link: '/', dropmenu: ""},
    {item:'About Us', link:'/About', dropmenu: ""},
    {item:'Services', link: '',dropmenu:[
      {name: "Web Design" , dropmenu: ""},
      {name: "Web Development", dropmenu: ""},
      {name: "Web Hosting", dropmenu: ""},
      {name: "Digital Marketing" , dropmenu: ""},
      {name: "SEO" , dropmenu: ""},
      {name: "App Development" , dropmenu: ""},
    ]},
    {item:'Contact Us', link:'/contact', dropmenu: ""},
  ]
  const [sticky, setSticky] = useState(false) 
  const setFixed = () => {
    if (window.scrollY >= 150) {
      setSticky(true);
    }
    else {
      setSticky(false);
    }
  }
  window.addEventListener('scroll', setFixed)
    return (
   <div className="slider-wrap">
      <div className="cl-header">
        <Navbar bg=""  className={ sticky ? 'sticky-nav' : 'cl-navigation' } >
          <Container>
            <Navbar.Brand ><Link to ="/">Megabyte Tech</Link></Navbar.Brand>
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ml-auto">
            {menu.map ((itemName)=>{
                  return (
                        < >
                        {itemName.dropmenu === "" &&
                        <Link to={itemName.link} className="nav-link">{itemName.item}</Link>
                        }
                        {itemName.dropmenu && 
                        <NavDropdown title={itemName.item} id="basic-nav-dropdown">
                        
                        {itemName.dropmenu && itemName.dropmenu.map((sub) => {
                          return(
                                <NavDropdown.Item href="/#">{sub.name}</NavDropdown.Item>
                                )  
                              })}
                        </NavDropdown>
                      }
                        </>
                        )
                      })}
                      </Nav>
            </Navbar.Collapse>
            <div className="nav-right">
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
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
          </Container>
        </Navbar>
      </div>
   </div>
    )
}