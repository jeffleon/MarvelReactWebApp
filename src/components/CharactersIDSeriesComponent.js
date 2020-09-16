import React from 'react'
import {Card, CardBody, CardText, CardImg, Button} from 'reactstrap'
import './styles/CharacterSeries.css'
import UndefinedImg from '../images/image_not_available.jpg'
import Error from '../pages/errorpage'
import {Add} from '../redux/actions/favorites'
import {useDispatch} from "react-redux"

const CharactersIDSeries = (props) => {
    console.log(props.series)
    const {datafilter}= props.series
    const dispatch = useDispatch()
    const Cards = datafilter.map((serie)=>{
        return(
            <div key={serie.id} className="col-12 col-sm-6 col-md-4 col-lg-3 col-3">
                <Card className="border-0 cardcharactersries">
                    <div className="d-flex justify-content-left">
                        {typeof(serie.thumbnail) !== 'undefined'?<CardImg src={`${serie.thumbnail.path}.${serie.thumbnail.extension}`} className='imagecomic'/>:<CardImg src={UndefinedImg} className='imagecomic'/>}
                    </div>
                    <CardBody className="cardtext">
                        <CardText>
                            {serie.title?serie.title:"Title not found"}
                        </CardText>
                        <Button size="sm" onClick={() => dispatch(Add(serie))} color="success"><span className="fa fa-check-circle"/> Favorite</Button>               
                    </CardBody>
                </Card>
            </div>
        )
    })
    return(
        <div className="series-id">
            <div className="row">
                {Cards !== null?Cards:<Error/>}
            </div>
        </div>
    )
}

export default CharactersIDSeries