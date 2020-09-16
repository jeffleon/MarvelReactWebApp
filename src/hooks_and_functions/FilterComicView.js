const FilterComicView = (data, word, decision) =>{
        
        if (decision === "2")
        {
            var datafilter = data.data.results.filter((character)=>{
                return character.issueNumber.toString().includes(word.toLowerCase())
            })
        }
        else if (decision === "3")
        {
            var datafilter = data.data.results.filter((character)=>{
                console.log(character.format)
                return character.format.toLowerCase().includes(word.toLowerCase())
            })
        }
        else{
            var datafilter = data.data.results.filter((character)=>{
                return character.title.toLowerCase().includes(word.toLowerCase())
            })
        }
    return {datafilter}    
}


export default FilterComicView