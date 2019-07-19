import React, {useEffect, useState} from "react";
import axios from "axios";
import {Box} from "./Style"



function SecondCharacter(data){
    console.log('here is the second character', data.data)
    const [name, setName]  = useState([]);
    const [height, setHeight]  = useState([]);
    const [birthyear, setBirthyear]  = useState([]);

    useEffect(()=>{
        axios
            .get(`${data.data}`)
            .then(response =>{
            console.log('new data', response)
            const name = response.data.name
            console.log(name)
            // setName(name)
            const height = response.data.height
            const birthyear = response.data.birth_year
            setName(name)
            setHeight(height)
            setBirthyear(birthyear)
            })
    },[data])

    return (
        <Box>
            <h3>Second Character: {name}</h3>
            <p>Height: {height}</p>
            <p>Birthyear: {birthyear}</p>
        </Box>
    )
}

export default SecondCharacter;