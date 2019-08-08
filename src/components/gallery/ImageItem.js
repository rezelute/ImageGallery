import React, { Component } from 'react'
import './imageItem.scss';
import img_loading from './../../assets/loading.gif';
import img_error from './../../assets/sad-penguin.jpg';
import PropTypes from "prop-types";


export default class ImageItem extends Component
{
   state = {
      loadState: "loading"
   }

   handleClick = (imageId) =>
   {
      this.props.imageClick(imageId);
   }

   handleImageLoad = () =>
   {
      this.setState({
         loadState: "success"
      })
   }
   handleImageError = () =>
   {
      this.setState({
         loadState: "failed"
      })
   }

   render()
   {

      return (
         <React.Fragment>
            <button onClick={e => this.handleClick(this.props.id)} className={(this.state.loadState === "success" ? "" : "hide")}>
               <img
                  className="image-content"
                  src={this.props.src} alt={this.props.title}
                  onLoad={this.handleImageLoad}
                  onError={this.handleImageError}
               />
            </button>
            <div className={"image-states " + (this.state.loadState !== "success" ? "" : "hide")}>
               <img src={img_loading} alt="loading" className={"loading " + (this.state.loadState === "loading" ? "" : "hide")} />
               <img src={img_error} alt="error" className={"error " + (this.state.loadState === "failed" ? "" : "hide")} />
            </div>
         </React.Fragment>
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