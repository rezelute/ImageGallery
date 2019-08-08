import React, { Component } from 'react'
import './gallery.scss';
import PropTypes from "prop-types";
import ImageItem from "./ImageItem";


export default class Gallery extends Component
{
   render()
   {
      // const imageItems = this.props.gallery.map((imageItem) =>
      //    <button key={imageItem.id} onClick={e => this.handleClick(imageItem.id)}>
      //       <p>imageItem: {imageItem.loaded}</p>
      //       <img src={img_loading} alt="loading" />
      //       <img
      //          className="content"
      //          src={imageItem.src} alt={imageItem.title}
      //          onLoad={ e=> this.handleImageLoad(imageItem.id)}
      //          // onError={ this.handleImageError(this)}
      //       />
      //    </button>
      // );

      return (
         <div id="gallery" className="masonry">
            {
               this.props.gallery.map((imageItem) => (
                  <div key={imageItem.id} >
                     <ImageItem id={imageItem.id} title={imageItem.title} src={imageItem.src} imageClick={this.props.imageClick} />
                  </div>
               ))
            }

            {/* {imageItems} */}
         </div>
      )
   }
}


//PropTypes
Gallery.propTypes = {
   imageClick: PropTypes.func.isRequired,
   gallery: PropTypes.array.isRequired
}