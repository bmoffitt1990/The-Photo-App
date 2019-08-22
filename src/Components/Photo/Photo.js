import React from 'react'
import './Photo.css'
import {DeleteButton} from '../DeletePhoto/DeletePhoto'

export const Photo = ({photoNum, photoSRC, deletePhoto}) => (
    <div className="photo-container">
        <DeleteButton deletePhoto={deletePhoto} photoNum={photoNum}/>
        <img alt={photoNum} src={ photoSRC } />
    </div>
)        