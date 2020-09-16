import savelocalstorage from "../../hooks_and_functions/savelocalstorage"
import  getlocalstorage from "../../hooks_and_functions/getlocalstorage"
import deletelocalstorage from "../../hooks_and_functions/deletelocalstorage"

const favoritesReducer = (state = [], action) =>{
    switch(action.type){
        case "ADD":
            const data = getlocalstorage()
            var flag = false
            if (data)
            {
                state = data
                state.forEach((comic)=>{
                    if (comic.id === action.payload.id)
                        flag = true
                })
            }
            if (!flag)
                state = state.concat(action.payload)
            savelocalstorage(state)
            return state
        case "DELETE":
            const data_filter = deletelocalstorage(action.payload)
            state = data_filter
            savelocalstorage(data_filter)
            window.location.reload(false)
            return state
        default:
            return state
    }
} 

export default favoritesReducer