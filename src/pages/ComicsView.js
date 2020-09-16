import React,{useState} from 'react'
import useFetch from '../hooks_and_functions/useFetch'
import Loading from '../components/LoadingComponent'
import Error from './errorpage'
import ComicsComponent from '../components/ComicsComponent'
import Navbar from '../components/navabarcomponent'
import FilterComicView from '../hooks_and_functions/FilterComicView'


const ComicsView = () =>{
    const {data , loading, error} = useFetch(`https://gateway.marvel.com:443/v1/public/comics?apikey=${REACT_APP_KEY}`) 
    var [word, setWord] = useState("")
    var [decision, setType] = useState("")
    var handleinput = (e) => setWord(word = e.target.value);
    var handledecision = (e) => setType(decision = e.target.value);

    if (loading)
        return <Loading/>
    if (error)
        return <Error/>
    if (data)
    { 
        const datafilter = FilterComicView(data, word, decision)
        return(
            <div>
                <Navbar handleinput={handleinput} handledecision={handledecision} dropdown={true}/>
                <ComicsComponent comics={datafilter}/>
            </div>
        )      
    }   
}

export default ComicsView