import React, {useState} from 'react'
import { useParams } from "react-router";
import useFetch from '../hooks_and_functions/useFetch'
import Loading from '../components/LoadingComponent'
import Error from './errorpage'
import CharacterIDComics from '../components/CharactersIDComicsComponent'
import NavBar from '../components/navabarcomponent'
import Filter from '../hooks_and_functions/Filter'


const CharacterComicsidView = () =>{
    var [word, setWord] = useState("")
    var handleinput = (e) => setWord(word = e.target.value);
    let { id } = useParams();
    const {data , loading, error} = useFetch(`https://gateway.marvel.com:443/v1/public/characters/${id}/comics?apikey=6fcfcf3a4db482c44b646bcc17a0b4a2`) 
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
                <CharacterIDComics comics={datafilter}/>
            </div>
        )   
    } 
}

export default CharacterComicsidView