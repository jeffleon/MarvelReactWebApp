import React,{useState} from 'react'
import useFetch from '../hooks_and_functions/useFetch'
import { useParams } from "react-router";
import Loading from '../components/LoadingComponent'
import Error from './errorpage'
import CharactersIDSeries from '../components/CharactersIDSeriesComponent'
import Navbar from '../components/navabarcomponent'
import Filter from '../hooks_and_functions/Filter'

const CharacterSeriesidView = () =>{
    let { id } = useParams();
    var [word, setWord] = useState("")
    var handleinput = (e) => setWord(word = e.target.value);
    const {data , loading, error} = useFetch(`https://gateway.marvel.com:443/v1/public/characters/${id}/series?apikey=${REACT_APP_KEY}`) 
    if (loading)
        return <Loading/>
    if (error)
        return <Error/>
    if (data)
    {
        const datafilter = Filter(data, word)
        return (
            <div>
                <Navbar handleinput={handleinput} />
                <CharactersIDSeries series={datafilter}/>
            </div>
        )
    }
}

export default CharacterSeriesidView