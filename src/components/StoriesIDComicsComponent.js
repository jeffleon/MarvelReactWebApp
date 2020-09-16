import React from 'react'
import {Jumbotron} from 'reactstrap'
import './styles/Stories.css'

const StoriesIDComicsComponent = (props) => {
    const {data:{results}} = props.comics
    const Cards = results.map((comic)=>{
        console.log(comic)
        return(
                <div className="row">
                    <div  className="col-0 col-sm-0 col-md-5 col-lg-5 col-5">
                        <img src={`${comic.thumbnail.path}.${comic.thumbnail.extension}`} className="storie-image"alt="storie"></img>
                    </div>
                    <div className="col-12 col-sm-12 col-md-5 col-lg-5 col-5 storie-text">
                        <h1>{comic.title?comic.title:"Title not found"}</h1>
                        <p>{comic.description?comic.description:"Title not found"}</p>
                    </div>
                </div>
        )
    })
    return(
        <div className="series-id">
            <Jumbotron>
                {Cards}
            </Jumbotron>
        </div>
    )
}

export default StoriesIDComicsComponent