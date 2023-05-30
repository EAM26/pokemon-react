import React from 'react';

function Card({name, pic_location, alt_location, abilities, num_moves, weight}) {
    return (
        <div>
            <h1>{name}</h1>
            <img src={pic_location} alt={alt_location}/>
            <ul>Abilities
                {abilities.map((ability, index) => {
                return (<li key={index}>{ability.ability.name}</li>)}
                )}
            </ul>
            <p>Weight: {weight}</p>
            <p>Moves: {num_moves}</p>
            <p>**********************</p>
        </div>
    );
}

export default Card;