import loadLocalStorage from "./getlocalstorage"

function deletefromlocalstorage(id){
    try{
        const storage = loadLocalStorage();
        if (storage === null) return undefined;
        const data_filter = storage.filter((comic)=>{
            return comic.id !== id
        })
        return data_filter
    }catch(err){
        console.log(err)
        return undefined;
    }
}

export default deletefromlocalstorage