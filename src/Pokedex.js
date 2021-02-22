import React from "react"
import Pokecard from "./Pokecard"
import "./Pokedex.css"

const Pokedex = ({pokemonArray}) => {
    return (
        <div>
            <h1 className="Pokedex-h1">Pokedex</h1>
            <div className="Pokedex">
                {pokemonArray.map(p => <div><Pokecard id={p.id} name={p.name} type={p.type} base_experience={p.base_experience} /></div>)}
        </div>
      </div>    
      )
}

export default Pokedex;