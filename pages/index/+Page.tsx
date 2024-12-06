import React, { useState } from "react";
import { useData } from "vike-react/useData";
import { PokemonsList } from "../../components/PokemonsList";
import { PokedexSearch } from "../../components/PokedexSearch";
import { Title } from "../../components/Title";
import type { Data } from "./+data";

export default function Page() {
  const [pokemons, types] = useData<Data>();
  const [pokemonsDisplayed, setPokemonsDisplayed] = useState(pokemons);

  const filterPokemons = async (name: String, typeParam: String) => {
    console.log(typeParam);
    let listPokemons = pokemons.filter(pokemon => pokemon.name.toLowerCase().includes(name.toLowerCase()));
    
    if(typeParam.length < 1)
    {    
      setPokemonsDisplayed(listPokemons);
      return;
    }

    listPokemons = listPokemons.filter(pokemon => {
      let typeInData = false;
      pokemon.types.forEach(type => {
        if(type.name === typeParam)
          typeInData = true;
      })

      return typeInData;
    });

    setPokemonsDisplayed(listPokemons);
  }
  
  return (
    <>
      <Title>Pokédex</Title>
      <PokedexSearch types={types} filterPokemons={filterPokemons} />
      <PokemonsList pokemons={pokemonsDisplayed}/>
    </>
  );
}
