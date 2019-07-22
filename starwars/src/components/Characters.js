import React from "react";


function Characters(data){

    console.log("here is data passed through", data)
    
    return (
        <div>Name: {data.data.name} </div>
        // <div> Gender: {data.data.gender} </div>
        

    )

}

export default Characters