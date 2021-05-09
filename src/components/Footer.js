import React from "react";
import '../App.css';
import { FaArrowUp} from 'react-icons/fa';
import { Container } from "reactstrap";

const year = new Date().getFullYear();
const Footer = ({handlePageScroll}) => {
  return (
    <Container className="themed-container footer-copyright" fluid="true">
     <div className='footer'>
       <div>
          <span>Copyright © {year} All Rights Reserved</span>
        </div>
        <div>
          <button onClick={handlePageScroll}><FaArrowUp/></button>
       </div>
     </div>
    </Container>
  );
};
export default Footer;