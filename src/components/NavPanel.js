import React from 'react';
import img_home from './../assets/home.svg';
import img_about from './../assets/about.svg';
import img_myimages from './../assets/gallery.svg';
import img_contact from './../assets/contact.svg';

export default function NavPanel() {
   return (
      <nav>
         <a href="home">
            <img src={img_home} alt="home"/>
            <span>Home</span>
         </a>
         <a href="about">
            <img src={img_about} alt="about"/>
            <span>About</span>
         </a>
         <a id="nav-gallery" href="gallery">
            <img src={img_myimages} alt="gallery"/>
            <span>Gallery</span>
         </a>
         <a href="contact">
            <img src={img_contact} alt="contact"/>
            <span>Contact</span>
         </a>
      </nav>
   )
}
