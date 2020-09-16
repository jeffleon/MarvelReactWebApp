import React,{useState} from 'react'
import {Card, CardBody, CardText, CardImg, CardTitle, Button, ButtonGroup} from 'reactstrap'
import './styles/Characters.css'
import UndefinedImg from '../images/image_not_available.jpg'
import './styles/Comics.css'
import {Add} from '../redux/actions/favorites'
import {useDispatch} from "react-redux"

const ComicsComponent = (props) => {
    const {datafilter} = props.comics
    const dispatch = useDispatch()

    const Cards = datafilter.map((comic)=>{
        return(
            <div key={comic.id} className="col-12 col-sm-6 col-md-4 col-lg-3 col-3">
                <Card className="border-0 card card-comics mt-4">
                    <div className="d-flex justify-content-center">
                        {comic.thumbnail !== null ?<CardImg src={`${comic.thumbnail.path}.${comic.thumbnail.extension}`} className='imagecomic' />:<CardImg src={UndefinedImg} className='imagecomic'/>}
                    </div>
                    <CardBody className="cardtextcomics">
                        <CardTitle>{comic.title?comic.title:"Title not found"}</CardTitle>
                        <CardText>
                            {comic.issueNumber?`Issue Number: ${comic.issueNumber}`: ""}
                            <br/>
                            {comic.format?`Format: ${comic.format}`:""}
                            <Button size="sm" onClick={() => dispatch(Add(comic))} color="success"><span className="fa fa-check-circle"/> Favorite</Button>               
                        </CardText>
                    </CardBody>
                </Card>
            </div>
        )
    })
    return(
        <div className="series-id">
            <div className="row">
                {Cards}
            </div>
        </div>
    )
}

export default ComicsComponent