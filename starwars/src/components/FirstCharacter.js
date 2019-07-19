import React, {useEffect, useState} from "react";
import axios from "axios";


function FirstCharacter(data){
    console.log('here is the first character', data.data)
    const [name, setName]  = useState([]);
    const [height, setHeight]  = useState([]);
    const [birthyear, setBirthyear]  = useState([]);
    useEffect(()=>{
        axios
            .get(`${data.data}`)
            .then(response =>{
            // console.log('new data', response)
            const name = response.data.name
            // console.log(name)
            const height = response.data.height
            const birthyear = response.data.birth_year
            setName(name)
            setHeight(height)
            setBirthyear(birthyear)
            })
    },[data])

    return(
        <div>
            <h3>First Character: {name}</h3>
            <p>Height: {height}</p>
            <p>Birthyear: {birthyear}</p>
        </div>

    );
}

export default FirstCharacter;