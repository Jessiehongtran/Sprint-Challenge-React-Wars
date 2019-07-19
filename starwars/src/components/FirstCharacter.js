import React, {useEffect, useState} from "react";
import axios from "axios";


function FirstCharacter(data){
    console.log('here is the first character', data.data)
    useEffect(()=>{
        axios
            .get(`${data.data}`)
            .then(response =>{
            console.log('new data', response)
            })
    })

    return(
        <div></div>
    );
}

export default FirstCharacter;