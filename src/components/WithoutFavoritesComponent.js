import React from "react"
import {Jumbotron, Button} from "reactstrap"
import {Link} from "react-router-dom"
import spidi from "../images/spidi.png"
import "./styles/WithoutFavorites.css"


const WithoutFavorites = () =>{
    return(
        <div className="containerWFav">
            <Jumbotron className="jumbotron">
                <div className="row">
                    <div  className="col-0 col-sm-0 col-md-5 col-lg-5 col-5">
                        <img src={spidi} className="spidi"alt="spidi"></img>
                    </div>
                    <div className="col-12 col-sm-12 col-md-5 col-lg-5 col-5 text-jumbotron">
                        <h1 className="display-3">Favorites Comics!</h1>
                        <p>Put all of your favorites comics in this special space.</p>
                        <p className="lead">
                        <Button color="warning"><Link className="linkfavorites" to="/characters">Start now</Link></Button>
                        </p>
                    </div>
                </div>
            </Jumbotron>
        </div>
    )
}

export default WithoutFavorites