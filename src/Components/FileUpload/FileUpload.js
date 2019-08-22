import React from 'react';
import './FileUpload.css'

export const FileUpload = ({fileUploadHandler}) => (
  <input 
    className="photoUploadButton" 
    type="file" 
    onChange={(e)=>fileUploadHandler(e)}
  />
)