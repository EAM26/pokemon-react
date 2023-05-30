import './App.css';
import axios from "axios";
import {useEffect, useState} from "react";
import Card from "./components/Card";

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
                    <Card
                    name={pokeData.name}
                    pic_location = {pokeData.sprites.front_default}
                    alt_location = {`picture of ${pokeData.name}`}
                    abilities = {pokeData.abilities}
                    weight = {pokeData.weight}
                    num_moves = {pokeData.moves.length}
                    />

                    {/*<h1>{pokeData.name}</h1>*/}
                    {/*<img src={pokeData.sprites.front_default} alt=""/>*/}
                    {/*<ul> Abilities*/}
                    {/*    {pokeData.abilities.map((ability, index)=> {*/}
                    {/*        return <li key={index}>{ability.ability.name}</li>*/}
                    {/*    })}*/}
                    {/*</ul>*/}
                    {/*<p>Weight: {pokeData.weight}</p>*/}
                    {/*<p>Moves: {pokeData.moves.length}</p>*/}
                </>):
                (<p></p>)}

        </div>
    );
}


export default App;

