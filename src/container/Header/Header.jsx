import React from 'react';
import { SubHeading } from '../../components'

import './Header.css';
import { images } from '../../constants';

const Header = () => (
  <div className='app__header app__wrapper section__padding' id='home'>
    <div className='app__wrapper_info'>
    <SubHeading title="Chase the new flavour"/>
    <h1 className='app__header-h1'>The key to Fine Dining</h1>
    <p className='p__opensans' style={{margin: '1rem'}}>In a charming townhouse in the centre of Chelsea, Rohit Ghai's Indian restaurant Kutir takes classic and traditional dishes from the country and reinvents them as refined, beautiful and flavour-packed plates of food.</p>
    <button type='button' className='custom__button'>Explore Menu</button>
    </div>

    <div className='app__wrapper_img'>
    <img src={images.welcome} alt="header img" />
    </div>
  </div>
);

export default Header;
