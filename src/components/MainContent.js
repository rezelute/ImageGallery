import React from 'react'
import Gallery from './gallery/Gallery';


export default class MainContent extends React.Component
{
   render() {
      return (
         <div className="mainContent">
            <div className="container">
               <Gallery gallery={this.props.gallery} imageClick={this.props.imageClick}/>
            </div>
         </div>
      )
   }
}
