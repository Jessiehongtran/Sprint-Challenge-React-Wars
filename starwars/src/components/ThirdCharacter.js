import React, {useEffect, useState} from "react";
import axios from "axios";



function ThirdCharacter(data){
    console.log('here is the third character', data.data)
    // const [name, setName]  = useState([]);
    useEffect(()=>{
        axios
            .get(`${data.data}`)
            .then(response =>{
            console.log('new data', response)
            const name = response.data.name
            console.log(name)
            // setName(name)
            })
    },[data])

    return(
        <div></div>
    );
}

export default ThirdCharacter;