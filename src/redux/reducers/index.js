import favorites from "./favorites"
import {combineReducers} from 'redux';
import loging from './logging'

const allreducers = combineReducers({
    favorites: favorites,
    loging: loging
})

export default allreducers