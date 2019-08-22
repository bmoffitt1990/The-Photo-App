import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './DeletePhoto.css'


export const DeleteButton = ({photoNum, deletePhoto}) => (
        <button className="deleteButton" onClick={()=>deletePhoto(photoNum)}>
            <FontAwesomeIcon icon="times" />
        </button>
)



