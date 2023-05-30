import './App.css';
import axios from "axios";
import {useEffect, useState} from "react";

function App() {

    const [pokeData, setPokeData] = useState({})


    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('https://pokeapi.co/api/v2/pokemon/jigglypuff')
                console.log(response.data)
                setPokeData(response.data)
            } catch (e) {
                console.error(e)
            }

        }

        fetchData();

    }, [])


    return (
        <div>
            {Object.keys(pokeData).length !== 0 ?
                (<>
                    <h1>{pokeData.name}</h1>
                    <img src={pokeData.sprites.front_default} alt="test"/>
                    <ul> Abilities
                        {pokeData.abilities.map((ability, index)=> {
                            return <li key={index}>{ability.ability.name}</li>
                        })}
                    </ul>
                    <p>Weight: {pokeData.weight}</p>
                    <p>Moves: {pokeData.moves.length}</p>
                </>):
                (<p></p>)}

        </div>
    );
}


export default App;

