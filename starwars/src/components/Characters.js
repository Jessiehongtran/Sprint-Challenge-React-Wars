import React from "react";


function Characters(data){

    console.log("here is data passed through", data)
    
    return (
        <div>Name: {data.data.name} </div>
        

    )

}

export default Characters