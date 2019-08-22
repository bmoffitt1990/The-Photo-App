import React from 'react';
import './PhotoFeed.css'
import { Photo } from '../Photo/Photo'

class PhotoFeed extends React.Component{
    
    render(){
        const {photoFilePaths, deletePhoto} = this.props

        return (
            <div className="photo-feed">
            {photoFilePaths.map((photoSRC, photoNum) =>{
                        return (
                            <Photo key={photoNum} photoNum={photoNum} photoSRC={photoSRC} deletePhoto={deletePhoto}/>
                        )
            })}
            </div>                        
        );
    }
}

export default PhotoFeed;
