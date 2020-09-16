import React from 'react'
import useFetch from '../hooks_and_functions/useFetch'
import { useParams } from "react-router";
import Loading from '../components/LoadingComponent'
import Error from './errorpage'
import StoriesIDComics from '../components/StoriesIDComicsComponent'
import NavBar from "../components/navabarcomponent"


const StoriesComicsidView = () =>{

    let { id } = useParams();
    const {data , loading, error} = useFetch(`https://gateway.marvel.com:443/v1/public/stories/${id}/comics?apikey=${REACT_APP_KEY}`) 
    if (loading)
        return <Loading/>
    if (error)
        return <Error/>
    if (data)
    {
        return (
            <div>
                <NavBar />
                <StoriesIDComics comics={data}/>
            </div>
        )
    }
}

export default StoriesComicsidView