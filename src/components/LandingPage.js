import React, { Component } from 'react';
//superagent will make our http requests (it's just an alternative to axios)
import superagent from 'superagent'
import { Link } from 'react-router-dom'
import Navbar from './Navbar';

let styles = {
        
    
    videoDiv : {
        height: '100vh',
        position: 'relative',
        margin: '0',
        padding: '0',
        overflow: 'hidden',
        borderBottom: "solid black"
    },

    videoBgvid  : { 
        position: "absolute",
        top: '50%',
        left: '50%',        
        width: 'auto',
        height: 'auto',
        minWidth: '100%',
        minHeight: '100%',
        zIndex: '-100',
        msTransform: 'translateX(-50%) translateY(-50%)',
        MozTransform: 'translateX(-50%) translateY(-50%)',
        WebkitTransform: 'translateX(-50%) translateY(-50%)',
        transform: 'translateX(-50%) translateY(-50%)',
        background: 'black no-repeat',
        backgroundSize: 'cover',
        
    },
    
    titleSubtitle : { 
    
        color: 'white',
        opacity: '.85',
        textAlign: 'center',
        marginBottom: '0',
        textShadow: '1px 2px 3px rgba(0, 0, 0, .9)',
      
    },
    
    title : {
       
        fontSize: '250px'
    },
    
    subtitle : {
   
        fontSize: '30px',
        margin: '0',
        fontFamily: "tahoma, calibri, sans-serif",
        fontStyle: "italic"
    },
    
    container : {
        width: '100%',
        margin: '0',
        padding: '0',
    },

    button : {
        fontSize: "90px",       
        display: "block",
        margin: '0 auto',
         marginTop: "35px",
        backgroundColor: "transparent",
        border: 'none',
        color: "black"
    }

 

}




class LandingPage extends Component {

       componentWillMount() {
    $('body').addClass("bodyStyle");
    $('html').addClass('htmlStyle');
    }

    componentWillUnmount() {
        $('body').removeClass("bodyStyle");
        $('html').removeClass("htmlStyle");
    }


  
    render(){
        
        return(
            <div id="LandingPage" className="container" style={styles.container}>
                <div className="videoContent" style={styles.videoDiv}>
             
                    <video id="bgvid" style={styles.videoBgvid} playsInline autoPlay muted loop>
                        
                        <source src="Nowhere.mp4" type="video/mp4" />
                        
                    </video>
                    <heading>
                    <h1 id='title' style={{...styles.titleSubtitle, ...styles.title}}>Go-On</h1>
                    <h3 id='subtitle' style={{...styles.titleSubtitle,...styles.subtitle}}>Share your new story</h3>
                    
                        <button style={styles.button}><span className="glyphicon glyphicon-menu-down arrow" aria-hidden="true"></span></button>
                    </heading>
                    
               
                </div>

                <div className="infoContent">
                        <h1>some words</h1>
                        <h1>some words</h1>
                        <h1>some words</h1>
                        <h1>some words</h1>
                        <h1>some words</h1>
                        <h1>some words</h1>
                        <h1>some words</h1>
                    </div>
            
                </div>
           
        )

     
    }

  
        
}

  

export default LandingPage;

