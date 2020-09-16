import React from 'react'
import {Card, CardBody, CardText, CardImg, ButtonGroup, Button} from 'reactstrap'
import './styles/Characters.css'
import {Link} from 'react-router-dom'

const Characters = (props) => {
    const Cards = props.comics.map((comic) =>{
        return(
            <div key={comic.id} className="col-12 col-sm-6 col-md-4 col-lg-3 col-3 justify-content-center">
                <Card width="100%" className="border-0 cardcharact mt-4">
                    <div className="d-flex">
                        <CardImg src={`${comic.thumbnail.path}.${comic.thumbnail.extension}`} className='imagecard'/>
                    </div>
                    <CardBody className="cardtext">
                        <CardText>{comic.name}</CardText>
                        <ButtonGroup>
                            <Button color="info"  className="buttons"><Link className="linkcharacter" to={`/characters/comics/${comic.id}`}>Comics</Link></Button>
                            <Button color="dark"  className="buttons"><Link className="linkcharacter" to={`/characters/series/${comic.id}`}>Series</Link></Button>
                        </ButtonGroup>
                    </CardBody>
                </Card>
            </div>
        )
    })
    
    return(
        <div className="row-characters">
            <div className="row characters">
                {Cards}
            </div>
        </div>
    )
}

export default Characters