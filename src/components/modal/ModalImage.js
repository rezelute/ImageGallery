import React, { Component } from 'react'
import PropTypes from "prop-types";
import './modalImage.scss';

export default class ModalImage extends Component
{
   render() {
      return (
         <div id="modal-image" className={this.props.isOpen? "isOpen" : ""}>
            <div id="modal-image-close">
               <button className="close" onClick={this.props.handleClose}>X</button>
            </div>
               
            <div id="modal-image-content">
               <img src={this.props.imgSrc} alt={this.props.imgTitle} />
            </div>
         </div>
      )
   }
}


//PropTypes
ModalImage.propTypes = {
   isOpen : PropTypes.bool.isRequired,
   imgTitle: PropTypes.string.isRequired,
   imgSrc: PropTypes.string.isRequired,
   handleClose: PropTypes.func.isRequired,
}