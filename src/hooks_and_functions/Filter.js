const Filter = (data, word) =>{
    const datafilter = data.data.results.filter((character)=>{
        return character.title.toLowerCase().includes(word.toLowerCase())
    })
    return {datafilter}
}


export default Filter