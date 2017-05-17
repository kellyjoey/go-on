import React, { Component } from 'react';
import superagent from 'superagent';

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
        alert("success");
    });
    
        
    }
    
    render() {
        return (
        <div>
           {this.state.images.map(item=><img src={item.url}></img>)}
        </div>

        )
    }


}

export default Gallery;