import React from 'react';
import { FiFacebook, FiInstagram, FiTwitter } from 'react-icons/fi';

import './Footer.css';
import { FooterOverlay, Newsletter } from '../../components';
import {images} from '../../constants';

const Footer = () => (
  <div className='app__footer section__padding'>
    <FooterOverlay/>
    <Newsletter/>
    <div className='app__footer-links'>
      <div className='app__footer-links_contact'>
        <h1 className='app__footer-headtext'>Contact Us</h1>
        <p className='p__opensans'> Energiei 23 Std, Bacau, Romania</p>
        <p className='p__opensans'> +40754345654</p>
        <p className='p__opensans'> +40754563455</p>
      </div>
        <div className='app__footer-links_logo'>
          <img src={images.gericht} alt="footer_logo"/>
          <p className='p__opensans'>'The best way to find yourself is to lose yourself in the service of others.'</p>
          <img src={images.spoon} alt="spoon" className='sppoon__img' style={{marginTop:'15px'}} />
          <div className='app__footer-links_icons'>
            <FiFacebook/>
            <FiTwitter/>
            <FiInstagram/>

          </div>
        </div>
      <div className='app__footer-links_work'>
        <h1 className='app__footer-headtext'>Working Hours</h1>
        <p className='p__opensans'> Monday - Friday :</p>
        <p className='p__opensans'>09:00am - 12:00am </p>
        <p className='p__opensans'> Saturday - Sunday :</p>
        <p className='p__opensans'> 07:00am - 11:00pm</p>
      </div>    
    </div>
      <div className='footer_copyright'>
        <p className='p__opensans'>2023 Gericht.All Rights Reserved</p>
      </div>
  </div>
);

export default Footer;
