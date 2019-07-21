import React, {useEffect, useState} from "react";
import axios from "axios";
import Characters from "./Characters";




function Container(props){
    const [character, setCharacter]  = useState([]);


    useEffect(()=>{
    axios
        .get(`https://swapi.co/api/films/1/`)
        .then(response =>{
            console.log('here', response)
            response.data.characters.map(person=>
            axios.get(`${person}`)
            .then(res=>
                {console.log('what is it', res)
                const eachCharacter = res.data
                setCharacter(eachCharacter)
            }
            ))
            // setCharacter(eachCharacter)
        }
        )
        .catch(err=>{
            console.log('Got some errors', err)
        })

    }, []);



    return(
        <div>
        <Characters data = {character}/>
        </div>
    );
}

export default Container