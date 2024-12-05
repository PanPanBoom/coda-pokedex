import React, { useState } from "react";
import { useData } from "vike-react/useData";
import { data, type Data } from "./+data";
import { Link } from "../../components/Link";
import { Pokemon } from "../../components/Pokemon";
import { PokemonsList } from "../../components/PokemonsList";
import { PokedexSearch } from "../../components/PokedexSearch";

export default function Page() {
  const [pokemons, types] = useData<Data>();
  const [pokemonsDisplayed, setPokemonsDisplayed] = useState(pokemons);

  const filterPokemons = async (name: String, typeParam: String) => {
    let listPokemons = [];
    listPokemons = pokemons.filter(pokemon => pokemon.name.toLowerCase().includes(name.toLowerCase()));
    
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
      <h1 className={"font-bold text-3xl pb-4"}>Pokédex</h1>
      <PokedexSearch types={types} filterPokemons={filterPokemons} />
      <PokemonsList pokemons={pokemonsDisplayed}/>
    </>
  );
}
