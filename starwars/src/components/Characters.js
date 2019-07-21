import React from "react";


function Characters(data){

    console.log("here is data passed through", data.data)
    console.log("names", data.data.name)

    const listCharacters = data.date

    return (
        <div>
        {listCharacters.map(person =>
        <h1>{person.name}</h1>)}
        </div>
        // data.data.map(n=> 
        // {<div>Name: {n.name}</div>}
        
        

    )

}

export default Characters