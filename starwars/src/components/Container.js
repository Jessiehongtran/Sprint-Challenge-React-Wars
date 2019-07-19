import React, {useEffect, useState} from "react";
import axios from "axios";
import FirstCharacter from "./FirstCharacter";
import SecondCharacter from "./SecondCharacter";
import ThirdCharacter from "./ThirdCharacter";



function Container(){
    const [people, setPeople]  = useState([]);
    // const [secondCharacter, setSecondCharacter]  = useState([]);
    // const [thirdCharacter, setThirdCharacter] = useState([]);

    useEffect(()=>{
    axios
        .get(`https://swapi.co/api/films/1/`)
        .then(response =>{
            // console.log('here', response)
            const characters = response.data.characters.map(person => person)
            // console.log('characters', characters)
            const individual = characters.map(person => person)
            console.log('firstcharacterlink',individual[0])
            
            setPeople(individual[0])
            // setSecondCharacter(individual[1])
            // setThirdCharacter(individual[2])
        })
        .catch(err=>{
            console.log('Got some errors', err)
        })

    }, []);



    return(
        <div>
        <FirstCharacter data = {people}/>
        <SecondCharacter data = {people}/> 
        <ThirdCharacter data = {people}/>    
        </div>
    );
}

export default Container