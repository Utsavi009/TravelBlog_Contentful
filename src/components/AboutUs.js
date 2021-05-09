import React from 'react';
import '../App.css';
import Utsavi_Photo from '../images/IMG_4619.JPG';

const AboutUs = () => {


    return (
        <div>
            <div className='container morepadding '>
                <hr className="text-countries-hr" />
        <div>        
        <h1 className="text-countries">The TBL Team</h1></div>
        <hr className="text-countries-hr" />
            <div className="about-wrapper">
                
                <div className='about-text'>
                    <p>We're just a few people who like traveling and sharing our experiences.
                    We hope our stories inspire you to fly and see the beauties of the world!</p>
                </div>
                
                <div className="about-profile"> 
                        <div className="about-cards">
                           <div><img className="about-photo" src={Utsavi_Photo} alt="Profile Photo"/></div>
                           <div><hr className="text-countries-hr" /></div>
                           <div><p className="about-profile-names">Utsavi</p>
                           <p>Favorite Places to Visit:</p>
                            <ul>
                                <li>
                                South India
                                </li>
                                <li>
                                    USA
                                </li>
                                <li>
                                    Europe
                                </li>
                            </ul>
                           </div>
                       </div> 

                       <div className="about-cards">
                        <div>
                            <img
                            className="about-photo"
                            src="https://scontent-frx5-1.xx.fbcdn.net/v/t31.18172-8/13584881_1001766123232467_601648257814696358_o.jpg?_nc_cat=100&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=k_0nsQ8V7VUAX8iJY_r&_nc_ht=scontent-frx5-1.xx&oh=bcdc85de3adb9e19fb39f8116199cecf&oe=60B568E9"
                            alt="Profile"
                            />
                        </div>
                        <div>
                            <hr className="text-countries-hr" />
                        </div>
                        <div>
                            <p className="about-profile-names">Aryan</p>
                            <p>Favorite Places to Visit:</p>
                            <ul>
                            <li>Europe</li>
                            <li>Africa</li>
                            <li>South America</li>
                            </ul>
                        </div>
                        </div>

                       <div className="about-cards">
                           <div><img className="about-photo" src="http://images.ctfassets.net/t0fd7bi3x7x9/6MRqOHJ5oJD769H2iocyr2/16cd1f956defde4197cb72f8d3aec0ef/DSC_5567_-_Copy.jpg" alt="Profile Photo"/></div>
                           <div><hr className="text-countries-hr" /></div>
                           <div><p className="about-profile-names">Robert</p>
                           <p>Favorite Places to Visit:</p>
                            <ul>
                                <li>
                                Japan
                                </li>
                                <li>
                                    Southwest USA
                                </li>
                                <li>
                                    Ireland
                                </li>
                            </ul>
                           
                           </div>
                       </div> 
                </div>
            </div>
        </div>
    </div>

    )
}
export default AboutUs;