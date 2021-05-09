import React, { useEffect, useState } from "react";
import '../App.css';
import Logo from "../images/TBL_logo_small_v02.svg";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem } from "reactstrap";
import {Link} from 'react-router-dom';
import JumboImage from './JumboImage';
import './NavBar.css';

const NavBar = ({handlePageScroll}) => {

      // Start of Fading Navbar 
      // https://medium.com/swlh/react-navbar-transition-b84e68199ae6
     // explanation of the navbar fade
    
      const [show, setShow] = useState(false);
      const navbarControl = () => {
        if (window.scrollY > 100) {
          setShow(true)
        } else {
          setShow(false)
        }
      }
      
      useEffect(()=>{
        window.addEventListener('scroll', navbarControl)
        return () => 
        { window.removeEventListener('scroll', navbarControl) }
      },[])
    // End of Fading Navbar 

  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
      <div className={`nav ${show && 'nav_blue nav_height_only'}`}>
            <div className='container-fluid sticky_nav'>
              <Navbar light expand="md" className="nav-main">
                <NavbarBrand href="/">
                  <Link exact to="/" onClick={handlePageScroll}>
                  <img className={`logo-img ${show && 'logo_smaller'}`} src={Logo} alt="logo" />
                  </Link>
                </NavbarBrand>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                  <Nav className="ml-auto" navbar >
                    <NavItem className='nav-items'>
                      <Link exact to="/america" className='nav-link-color' onClick={handlePageScroll}>America</Link>
                    </NavItem>

                    <NavItem className='nav-items'>
                      <Link exact to="/europe" className='nav-link-color' onClick={handlePageScroll}>Europe</Link>
                    </NavItem>

                    <NavItem className='nav-items'>
                      <Link exact to="/asia" className='nav-link-color' onClick={handlePageScroll}>Asia</Link>
                    </NavItem>

                    <NavItem className='nav-items'>
                      <Link exact to="/africa" className='nav-link-color' onClick={handlePageScroll}>Africa</Link>
                    </NavItem>

                    <NavItem className='nav-items'>
                      <Link exact to="/aboutus" className='nav-link-color-about' onClick={handlePageScroll}>About Us</Link>
                    </NavItem>
                  </Nav>
                </Collapse>
              </Navbar>


            </div>
       </div>     

  );
};

export default NavBar;