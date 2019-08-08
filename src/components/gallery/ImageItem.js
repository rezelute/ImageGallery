import React, { Component } from 'react'
import './imageItem.scss';
import img_loading from './../../assets/loading.gif';
import PropTypes from "prop-types";


export default class ImageItem extends Component
{
   state = {
      hasLoaded:false
   }

   handleClick = (imageId) =>
   {
      this.props.imageClick(imageId);
   }

   handleImageLoad= (clickedId)=>
   {
      this.setState({
         hasLoaded: true
      })
   }
   handleImageError()
   {
      this.setState({
         hasLoaded: true
      })
   }

   render()
   {

      return (
         <button onClick={e => this.handleClick(this.props.id)}>
            <img src={img_loading} alt="loading" className={"loading " + (this.state.hasLoaded ? "hide" : "")} />
            <img
               className="content"
               src={this.props.src} alt={this.props.title}
               onLoad={ this.handleImageLoad}
               onError={ this.handleImageError}
            />
         </button>
      )
   }
}

// function imagesLoaded(parentNode) {
//    const imgElements = parentNode.querySelectorAll("img");
//    for (const img of imgElements) {
//      if (!img.complete) {
//        return false;
//      }
//    }
//    console.log("finished loading all");
//    return true;
//  }
 
 

//PropTypes
ImageItem.propTypes = {
   imageClick: PropTypes.func.isRequired,
   id: PropTypes.string.isRequired,
   title: PropTypes.string.isRequired,
   src: PropTypes.string.isRequired,
}