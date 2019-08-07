import React, { Component } from 'react'
import './gallery.scss';
import PropTypes from "prop-types";


export default class Gallery extends Component
{
   handleClick = (imageId) =>
   {
      this.props.imageClick(imageId);
   }

   render()
   {
      const imageItems = this.props.gallery.map((imageItem) =>
         <button key={imageItem.id} onClick={ e => this.handleClick(imageItem.id) }>
            <img src={imageItem.src} alt={imageItem.title} />
         </button>
      );

      return (
         <div className="gallery masonry">
            {imageItems}
            {/* <img src="https://www.placecage.com/200/300" alt=""/>
            <img src="https://www.placecage.com/200/300" alt=""/>
            <img src="https://www.placecage.com/200/300" alt=""/> */}
         </div>
      )
   }
}


//PropTypes
Gallery.propTypes = {
   imageClick: PropTypes.func.isRequired,
   gallery: PropTypes.array.isRequired,
}