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
      galleryUrl: "https://www.placecage.com/{{w}}/{{h}}",//dont use forward slash at the end. //https://www.placecage.com/{{w}}/{{h}}  |  http://via.placeholder.com/{{w}}x{{h}}
      numberOfImages: 20,
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
      //on mount, load gallery into the state
      const newGallery_ar = [];
      for (let i = 0; i < this.state.numberOfImages; i++) {
         //generate random height and width for the image between 500 and 1280
         let rndmHeight = Math.floor(Math.random() * 1280) + 500;
         let rndmWidth = Math.floor(Math.random() * 1280) + 500;
         //build the url for this site
         let imgUrl = this.state.galleryUrl.replace("{{w}}", rndmWidth).replace("{{h}}", rndmHeight);

         newGallery_ar.push(
            {
               id: i.toString(),
               title: `face ${i}`,
               //src: `https://www.placecage.com/${rndmWidth}/${rndmHeight}`
               src: imgUrl
            }
         )
      }

      this.setState({ gallery: newGallery_ar });
   }

   //image clicked > set the modal state to load the new image details
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

   //modal closed > remove the noscroll on body and reset modal state
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