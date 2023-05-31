import './App.css';
import axios from "axios";
import {useEffect, useState} from "react";
import Card from "./components/Card";

function App() {

    const [pokeList, setPokeList] = useState({})
    const [link, setLink] = useState('https://pokeapi.co/api/v2/pokemon')

    function handleClick(link) {
        setLink(link);
    }


    useEffect(() => {
        async function getTwentyPokes() {
            try {
                const fetchDataTwentyPokes = await axios.get(link)
                console.log(fetchDataTwentyPokes.data)
                setPokeList(fetchDataTwentyPokes.data)
            } catch (e) {
                console.error(e)
            }
        }

        getTwentyPokes();

    }, [link])


    return (
        <div className="outer-container">
            <div className="inner-container">
                <h1>POKEMON</h1>
                <div className="button-box">
                    <button
                        disabled={pokeList.previous === null}
                        onClick={(() => {
                            handleClick(pokeList.previous)
                        })}>Prev
                    </button>
                    <button onClick={(() => {
                        handleClick(pokeList.next)
                    })}>Next
                    </button>
                </div>
                {Object.keys(pokeList).length > 0 &&
                    <div className="cards-frame">
                        {pokeList.results.map((poke) => {
                            return (<Card key={poke.name} pokeName={poke.name}/>)
                        })}
                    </div>}</div>
        </div>
    );
}


export default App;

