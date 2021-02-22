import React from "react"

const Pokecard = ({id, name, type, base_experience}) => {
    // console.log({id, name, type, base_experience})
    let src_withId = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`
    return (
        <div>
            <h3>{name}</h3>
            <img src={src_withId} />
            <p>Type: {type}</p>
            <p>Base Experience: {base_experience}</p>
        </div>
    )
}

export default Pokecard;