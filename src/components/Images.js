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
        //prepare your request for cloudinary
        //see uploading with a direct call to the API on cloudinary

        //this is the name of your library in your cloudinary account
        const cloudName = 'finalproject'
        const url = 'https://api.cloudinary.com/v1_1/' + cloudName + '/image/upload'
        //cloudinary wants a timestamp in seconds hence the dividing by 1000
        const timestamp = Date.now()/1000
        //uploadPreset found in your settings in Cloudinary
        const uploadPreset = 'dvyocx63'
        //create a parameter string
        const paramsStr = 'timestamp' + timestamp + '&upload_preset=' + uploadPreset + 'EH2_iF_FqXGA3e_J1RKQFEOQwtc'
       
        const params = {
            'api_key': '386979959351638',
            'timestamp': timestamp,
            'upload_preset': uploadPreset
        }

        //prepare request for superagent
        let uploadRequest = superagent.post(url)
        uploadRequest.attach('file', image)
        //this is just going to iterate through all our keys and params rather than doing them one by one, matching up keys and values from our json object above
        Object.keys(params).forEach((key) => {
            uploadRequest.field(key, params[key])
        })
        console.log(uploadRequest)
        //finally let's make the request
        uploadRequest.end((err, resp) => {
            if (err){
                alert(err, null)
                return
            }
            //superagent gives the response, this will help us identify what data we get from cloudinary if the upload was successful
            console.log('UPLOAD COMPLETE: ' + JSON.stringify(resp.body))
            const uploaded = resp.body
            //make a copy of the array, add new image to the copy, and reset the state
            let updatedImages = Object.assign([], this.state.images)
            updatedImages.push(uploaded)
            //setState is going to trigger a re-render or refresh of the component each time it's called
            this.setState({
                images: updatedImages
            })

        })

    }

    removeImage(event){
        event.preventDefault()
        console.log("removeImage: " + event.target.id)

        let updatedImages = Object.assign([], this.state.images)
        updatedImages.splice(event.target.id, 1)
        //setState is going to trigger a re-render or refresh of the component each time it's called
        this.setState({
            images: updatedImages
        })
    }
    
    render(){
        const list = this.state.images.map((image, i) => {
            return(
                <li key={i}>
                    <img style= {{width: 72}} src={image.secure_url} />
                    <br /><a id={i} onClick={this.removeImage.bind(this)} href="#">Remove</a>
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