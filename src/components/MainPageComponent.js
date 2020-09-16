import React from 'react'
import {useDispatch} from "react-redux"
import  getlocalstorage from "../hooks_and_functions/getlocalstorage"
import {Card, CardBody, CardImg, CardText, CardTitle, Button} from "reactstrap"
import {Delete} from '../redux/actions/favorites'
import './styles/mainpage.css'
import UndefinedImg from "../images/image_not_available.jpg"

const MainPageComponent = () => {
    const data = getlocalstorage()
    const dispatch = useDispatch()
    console.log(data)
    const FavoriteComics = data.map((favorites)=>{
        return(
            <div key={favorites.id} className="col-12 col-sm-6 col-md-4 col-lg-3 col-3">
                <Card className="card-favorites">
                    <div className="d-flex justify-content-center">
                        {favorites.thumbnail !== null ?<CardImg src={`${favorites.thumbnail.path}.${favorites.thumbnail.extension}`} className='imagecomic' />:<CardImg src={UndefinedImg} className='imagecomic'/>}
                    </div>
                    <CardBody className="cardtextcomics">
                    <CardTitle>{favorites.title?favorites.title:"Title not found"}</CardTitle>
                        <CardText>
                            <Button size="sm" color="danger" onClick={()=>dispatch(Delete(favorites.id))}><span className="fa fa-minus-circle"/> Delete</Button>
                        </CardText>
                    </CardBody>
                </Card>
            </div>
        )
    })
    return (
        <div className="favorite-id">
            <h1 className="title">Favorite Comics</h1>
            <div className="row">
                {FavoriteComics}
            </div>
        </div>
       )   
}

export default MainPageComponent