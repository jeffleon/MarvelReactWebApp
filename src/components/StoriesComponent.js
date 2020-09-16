import React,{useState} from 'react'
import {Card, CardBody, CardText, Button, Toast, ToastBody, ToastHeader} from 'reactstrap'
import './styles/Characters.css'
import {Link} from 'react-router-dom'
import SpidiIco from '../images/spidico.ico'

import "./styles/Stories.css"

const StoriesComponent = (props) => {
    const {datafilter} = props.stories
    const Cards = datafilter.map((storie)=>{
        return(
            <div key={storie.id} className="col-12 col-sm-12 col-md-5 stories">
                <div className="p-3 bg-info my-2 rounded">
                    <Toast>
                        <ToastHeader >
                            <i class="fa fa-book fa-fw"></i>
                        </ToastHeader>
                        <ToastBody>
                            <Link className="linkstories" to={`/stories/comics/${storie.id}`}>{storie.title?storie.title:"Title not found"}</Link>
                        </ToastBody>
                    </Toast>
                </div> 
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

export default StoriesComponent