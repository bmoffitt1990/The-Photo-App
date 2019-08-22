import React from 'react';
import PhotoFeed from "../PhotoFeed/PhotoFeed"
import {FileUpload} from "../FileUpload/FileUpload"


//add in ability to name the images. Take imageFilePath and turn it into an object with the imageFilepath array and a name for the images as well


// Change order of photos (pending)
// Save the layout 
// create splash page
    //style the front page


//To Do

//make sure functions are passed through properly
//do I need to store the file in the state?

class Page extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      photos:[],
      photoFilePaths: []
    }; 
  }

  fileUploadHandler = e => {
    e.preventDefault();

    const {
      photoFilePaths,
      photos
    } = this.state

    const reader = new FileReader();
    const file = e.target.files[0];
    
    reader.onloadend = () => {
      const photoFilePathCopy = photoFilePaths.slice()
      const photoCopy = photos.slice()

      photoFilePathCopy.push(reader.result)
      photoCopy.push(file)

      this.setState({
        photos: photoCopy,
        photoFilePaths: photoFilePathCopy
      }); 
    }

    reader.readAsDataURL(file)
  }

  deletePhoto = (photoNum) => {
    const {photos, photoFilePaths} = this.state

    const deleteFileIndex = photos.filter( (_,index) => index !== photoNum)
    const deletePathIndex = photoFilePaths.filter( (_,index) => index !== photoNum)

    this.setState({
      photos: deleteFileIndex,
      photoFilePaths: deletePathIndex
    })
  }

  render(){
    const {photoFilePaths} = this.state
    return(
        <>
            <FileUpload fileUploadHandler={this.fileUploadHandler}/>
            <PhotoFeed photoFilePaths={photoFilePaths} deletePhoto={this.deletePhoto}/>
        </>
    )
  }
}

export default Page;

