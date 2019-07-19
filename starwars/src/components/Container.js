import React, {useEffect, useState} from "react";
import axios from "axios";
import FirstCharacter from "./FirstCharacter";
import SecondCharacter from "./SecondCharacter";
import ThirdCharacter from "./ThirdCharacter";



function Container(){
    const [firstCharacter, setFirstCharacter]  = useState([]);
    const [secondCharacter, setSecondCharacter]  = useState([]);
    const [thirdCharacter, setThirdCharacter] = useState([]);

    useEffect(()=>{
    axios
        .get(`https://swapi.co/api/films/1/`)
        .then(response =>{
            // console.log('here', response)
            const characters = response.data.characters.map(person => person)
            // console.log('characters', characters)
            const individual = characters.map(person => person)
            // console.log('firstcharacter',individual[0])
            
            setFirstCharacter(individual[0])
            setSecondCharacter(individual[1])
            setThirdCharacter(individual[2])
        })
        .catch(err=>{
            console.log('Got some errors', err)
        })

    }, []);



    return(
        <div>
        <FirstCharacter firstCharacter = {firstCharacter}/>
        <SecondCharacter secondCharacter = {secondCharacter}/> 
        <ThirdCharacter thirdCharacter = {thirdCharacter}/>    
        </div>
    );
}

export default Container