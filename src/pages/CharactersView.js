import React, { useState } from 'react'
import useFetch from '../hooks_and_functions/useFetch'
import Loading from '../components/LoadingComponent'
import Error from './errorpage'
import Characters from '../components/CharactersComponent'
import NavBar from '../components/navabarcomponent'

const CharactersView = () =>{
    const {data , loading, error} = useFetch(`https://gateway.marvel.com:443/v1/public/characters?apikey=${REACT_APP_KEY}`) 
    var [word, setWord] = useState("")
    var handleinput = (e) => setWord(word = e.target.value);
    if (loading)
        return <Loading/>
    if (error)
        return <Error/>
    if (data)
    {
        const datafilter = data.data.results.filter((character)=>{
            return character.name.toLowerCase().includes(word.toLowerCase())
        })
        return (
        <div>
            <NavBar handleinput={handleinput} />
            <Characters comics={datafilter}/>
        </div>
        )
    }
}
export default CharactersView