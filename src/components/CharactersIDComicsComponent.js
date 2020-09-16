import React from 'react'
import {Card, CardBody, CardText, CardImg, Button} from 'reactstrap'
import UndefinedImg from '../images/image_not_available.jpg'
import './styles/Comics.css'
import {Add} from '../redux/actions/favorites'
import {useDispatch} from "react-redux"
import "./styles/CharacterComics.css"

const CharactersIDComics = (props) => {
    const {datafilter} = props.comics
    const dispatch = useDispatch()
    const Cards = datafilter.map((comic)=>{
        return(
            <div key={comic.id} className="col-12 col-sm-6 col-md-4 col-lg-3 col-3">
                <Card className="border-0" className="cardcharactercomics">
                    <div className="d-flex justify-content-center">
                        {typeof(comic.images[0]) !== 'undefined'?<CardImg src={`${comic.images[0].path}.${comic.images[0].extension}`} className='imagecomic'/>:<CardImg src={UndefinedImg} className='imagecomic'/>}
                    </div>
                    <CardBody className="cardtext">
                        <CardText>
                            {comic.title?comic.title:"Title not found"}
                        </CardText>
                        <Button size="sm" onClick={() => dispatch(Add(comic))} color="success"><span className="fa fa-check-circle"/> Favorite</Button>               
                    </CardBody>
                </Card>
            </div>
        )      
    })
    return(
        <div className="comics-id">
            <div className="row">
                {Cards}
            </div>
        </div>
    )
}

export default CharactersIDComics