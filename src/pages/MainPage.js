import React from 'react'
import NavBar from '../components/navabarcomponent'
import  getlocalstorage from "../hooks_and_functions/getlocalstorage"
import CarrouselComic from '../components/CarrouselComponent'
import MainPageComponent from '../components/MainPageComponent'
import WithoutFavorites from "../components/WithoutFavoritesComponent"

const MainPage = () => {
    const data = getlocalstorage()
    console.log(data)
    return(
        <div>
            <NavBar/>
            {data !== undefined?<CarrouselComic/>:""}
            { Array.isArray(data) && data.length ?<MainPageComponent/>:<WithoutFavorites/>}
        </div>
    )
}

export default MainPage