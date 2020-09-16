import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import "./styles/carousel.css"
import getlocalstorage from "../hooks_and_functions/getlocalstorage"
 
class Carrousel extends Component {
    render() {
        const data = getlocalstorage()
        const slides = data.map((slide)=>{
            return(
                <div key={slide.id} className="image-1">
                    <img src={`${slide.thumbnail.path}.${slide.thumbnail.extension}`} height="500px"/>
                    <p className="legend">{slide.description?slide.description:slide.title}</p>
                </div>
            )
        })
        return (
            <Carousel className="carrousel">
                {slides}
            </Carousel>
        );
    }
}

export default Carrousel