import React, {useEffect, useState} from "react";
import axios from "axios";
import Bio from "./CharacterBio";
import Appearance from "./CharacterAppearance";



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
        <div></div>
    );
}

export default Container