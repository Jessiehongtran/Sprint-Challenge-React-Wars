import React from "react";


function Characters(data){

    console.log("here is data passed through", data.data)


    return (
        data.data.map(n=> 
        {<div>Name: {n.name}</div>}
        
        )

    );

}

export default Characters