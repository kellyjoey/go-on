import React, { Component } from 'react'
//third party react component dropzone where you can click and upload dialog will pop up or you can drag and drop
import Dropzone from 'react-dropzone'
//superagent will make our http requests (it's just an alternative to axios)
import superagent from 'superagent'




class Images extends Component {

    constructor() {
        super()
        this.state = {
            images: []
        }
    }
    //this function will be called in the dropzone component below, takes a files argument 'files' an array of files
    uploadFile(files){
        console.log('uploadFile: ')
        const image = files[0]
        console.log(image);
        
            //make a copy of the array, add new image to the copy, and reset the state
            let updatedImages = Object.assign([], this.state.images)
            updatedImages.push(image)
            //setState is going to trigger a re-render or refresh of the component each time it's called
            this.setState({
                images: updatedImages
            })
            console.log(this.state.images);
    }

    uploadImage(event){
        event.preventDefault()
        console.log("uploadImage: " + event.target.id)

        let updatedImages = Object.assign([], this.state.images)
        //setState is going to trigger a re-render or refresh of the component each time it's called
        this.setState({
            images: updatedImages
        })
    }
    
    render(){
        const list = this.state.images.map((image, i) => {
            return(
                <li key={i}>
                    <img style= {{width: 72}} src={image.preview} />
                    <br /><a id={i} onClick={this.uploadImage.bind(this)} href="#" className="uploadButton" data-image={this.state.images}>Upload</a>
                </li>
            )
        })
        return(
        <div className="row">
            <div className="col-xs-12 center-block">
                Images Component
                {/*dropzone takes a property called onDrop, which function callback that will be triggered when something is dropped into the dropzone*/}
                
                <Dropzone onDrop={this.uploadFile.bind(this)}/>
                
                <ol>
                    { list }
                </ol>
            </div>
        </div>
        )
    }
}
export default Images

