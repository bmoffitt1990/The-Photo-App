import React from 'react'
import './Photo.css'
import {DeleteButton} from '../DeletePhoto/DeletePhoto'

export const Photo = ({photoNum, photoSRC, deletePhoto}) => {
    console.log(photoNum)
    return(
    <div className="photo-container">
        <DeleteButton deletePhoto={deletePhoto} photoNum={photoNum}/>
        <img alt={photoNum} src={ photoSRC } />
    </div>
    )
}

//biggest problem with this function was the way I was writing the funciton on this level. 
        