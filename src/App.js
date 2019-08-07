//import logo from './logo.svg';
import React from 'react';
import Header from './components/Header';
import NavPanel from './components/NavPanel';
import MainContent from './components/MainContent';
import ModalImage from './components/modal/ModalImage';
import './style/App.scss';
//import uuid from "uuid";

export default class App extends React.Component
{
   state = {
      modal: {
         isOpen: false,
         imgSrc: "",
         imgTitle: ""
      },
      gallery: []
   }

   //mounting
   componentDidMount()
   {
      const newGallery_ar = [];
      for (let i = 0; i < 10; i++) {
         var rndmHeight = Math.floor(Math.random() * 1280) + 500; // returns a random integer from 1 to 100 
         var rndmWidth = Math.floor(Math.random() * 1280) + 500; // returns a random integer from 1 to 100 

         newGallery_ar.push(
            {
               id: i,
               title: `face ${i}`,
               //src: `https://www.placecage.com/${rndmWidth}/${rndmHeight}`
               src: `http://via.placeholder.com/${rndmWidth}x${rndmHeight}.png`
            }
         )
      }

      this.setState({ gallery: newGallery_ar });
   }

   //handle image clicked
   handleImageClick = (clickedImgId) =>
   {
      //stop the body from scrolling in bg of modal
      document.body.classList.add('noScroll');

      //get the details of the clicked image from state
      const {src, title}= this.state.gallery.find( imgItem=> imgItem.id===clickedImgId)

      //show the modal
      this.setState({
         modal: {
            isOpen: true,
            imgSrc: src,
            imgTitle: title
         }
      })
   }

   handleModalClose= () =>
   {
      //enable body scrolling again
      document.body.classList.remove('noScroll');

      //close the modal
      this.setState({
         modal: {
            isOpen: false,
            imgSrc: "",
            imgTitle: ""
         }
      })
   }

   render()
   {
      return (
         <React.Fragment>
            <ModalImage handleClose={this.handleModalClose} isOpen={this.state.modal.isOpen} imgSrc={this.state.modal.imgSrc} imgTitle={this.state.modal.imgTitle}/>
            <Header />

            <main>
               <NavPanel />
               <MainContent gallery={this.state.gallery} imageClick={this.handleImageClick} />
            </main>

            {/*<img src={logo} className="App-logo" alt="logo" />*/}
         </React.Fragment>
      );
   }
}