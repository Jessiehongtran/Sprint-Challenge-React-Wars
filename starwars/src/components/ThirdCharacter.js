import React, {useEffect, useState} from "react";
import axios from "axios";
import {Box, Title, Info} from "./Style";



function ThirdCharacter(data){
    console.log('here is the third character', data.data)
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

    return(
        <Box>
            <Title>Third Character: {name}</Title>
            <Info>Height: {height}</Info>
            <Info>Birthyear: {birthyear}</Info>
        </Box>
    );
}

export default ThirdCharacter;