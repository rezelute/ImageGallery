import React, { Component } from 'react'
import PropTypes from "prop-types";
import './modalImage.scss';

export default class ModalImage extends Component
{
   constructor(props){
      super(props);
      this.escKeyPressed = this.escKeyPressed.bind(this);
   }
   
   //handles esc key being pressed to close modal
   escKeyPressed(event)
   {
      if(event.keyCode === 27) {
         this.props.handleClose();
      }
   }
   
   componentDidMount()
   {
      //listen to esc key on mount
      document.addEventListener("keydown", this.escKeyPressed, false);
   }

   componentWillUnmount()
   {
      //stop listening to esc key on unmount
      document.removeEventListener("keydown", this.escKeyPressed, false);
   }

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