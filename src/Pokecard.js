import React from "react"
import "./Pokecard.css"

const Pokecard = ({id, name, type, base_experience}) => {
    // console.log({id, name, type, base_experience})
    let src_withId = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`
    return (
        <div className="Pokecard">
            <h3 className="Pokecard-h3">{name}</h3>
            <img className="Pokecard-img" src={src_withId} />
            <p>Type: {type}</p>
            <p>Base Experience: {base_experience}</p>
        </div>
    )
}

export default Pokecard;