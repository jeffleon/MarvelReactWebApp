import React,{useState} from 'react'
import useFetch from '../hooks_and_functions/useFetch'
import Loading from '../components/LoadingComponent'
import Error from './errorpage'
import StoriesComponent from '../components/StoriesComponent'
import NavBar from "../components/navabarcomponent"
import Filter from "../hooks_and_functions/Filter"

const StoriesView = () =>{
    var [word, setWord] = useState("")
    var handleinput = (e) => setWord(word = e.target.value);
    const {data , loading, error} = useFetch(`https://gateway.marvel.com:443/v1/public/stories?apikey=${REACT_APP_KEY}`) 
    if (loading)
        return <Loading/>
    if (error)
        return <Error/>
    if (data)
    {
        const datafilter = Filter(data, word)
        return (
            <div>
                <NavBar handleinput={handleinput} />
                <StoriesComponent stories={datafilter}/>
            </div>
        )
    }   
}

export default StoriesView