import React from 'react'
import {Switch, Route, Redirect} from 'react-router-dom'
import CharacterComicsidView from './CharacterComicsIDView'
import CharactersView from './CharactersView'
import CharacterSeriesidView from './CharacterSeriesIDview'
import ComicsView from './ComicsView'
import StoriesView from './StoriesView'
import StoriesComicsidView from './StoriesComicsIDview'
import MainPage from '../pages/MainPage'

const Main = () =>{

    return(
        <div className="main-component">
            <Switch>
                <Route exact path="/characters" component={CharactersView}/> 
                <Route exact path="/characters/comics/:id" component={CharacterComicsidView}/>
                <Route exact path="/characters/series/:id" component={CharacterSeriesidView}/>
                <Route exact path="/comics" component={ComicsView}/>
                <Route exact path="/stories" component={StoriesView}/>
                <Route exact path="/stories/comics/:id" component={StoriesComicsidView}/>
                <Route exact path="/favorite" component={MainPage}/>
                <Redirect to="/favorite"/>
            </Switch>
        </div>
    )

}

export default Main 