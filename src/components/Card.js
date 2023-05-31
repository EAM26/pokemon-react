import React, {useEffect, useState} from 'react';
import axios from "axios";



function Card({pokeName}) {

    const [pokeData, setPokeData] = useState({})
    // const { id } = useParams()

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokeName}`)
                // console.log(response.data)
                setPokeData(response.data)
            } catch (e) {
                console.error(e)
            }

        }

        fetchData();

    }, [pokeName])

    const {name, sprites, abilities, moves, weight } = pokeData;

    return (
            <div className="poke-card">
        {Object.keys(pokeData).length > 0 && (
                <>
                    <h1>{name}</h1>
                   <img src={sprites.front_default} alt="test" />
                    <p>Moves: {moves.length}</p>
                    <p>Weight: {weight}</p>
                    <ul>Abilities:
                        {abilities.map((ability, index) => {
                                return (<li key={ability.ability.name + ability.slot}>{ability.ability.name}</li>)
                            }
                        )}
                    </ul>
                </>)
        } </div>
    );
}

export default Card;