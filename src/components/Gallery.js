import React, { Component } from 'react';
import superagent from 'superagent';
import Navbar from './Navbar';

class Gallery extends Component {

    constructor() {
        super()
        this.state = {
            images: []
        }
    }

    componentDidMount() {
       let that = this;
    superagent
    .get('/picList')
    .end(function(err, res){
        that.setState({
            images: res.body.resources
        })
        console.log(that.state.images);
    });
    
        
    }
    
    render() {
        return (
        
        <div className="content">
            <Navbar />
            <header className ="page-header text-center">
                <h1 className="heading">Go-On!</h1>
            </header>
            <div id="galleryDiv">
                {this.state.images.map((item, index) =><img src={item.url} key ={index} className="galleryImage"></img>)}
            </div>
        </div>

        )
    }


}

export default Gallery;