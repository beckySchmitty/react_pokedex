import React from "react"
import './App.css';
import defaultPokemon from "./defaultPokemon"
import Pokedex from "./Pokedex"


function App() {
  return (
    <div className="App">
      <Pokedex pokemonArray={defaultPokemon} />
    </div>
  );
}

export default App;
