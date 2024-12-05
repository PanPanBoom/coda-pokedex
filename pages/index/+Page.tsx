import React, { useState } from "react";
import { useData } from "vike-react/useData";
import { data, type Data } from "./+data";
import { Link } from "../../components/Link";

export default function Page() {
  const [pokemons, types] = useData<Data>();
  const [pokemonsDisplayed, setPokemonsDisplayed] = useState(pokemons); 
  const [input, setInput] = useState("");
  const [selectedType, setSelectedType] = useState("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);

    filterPokemons(e.target.value, selectedType)
  }

  const handleSelection = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedType(e.target.value);

    filterPokemons(input, e.target.value);
  }

  const filterPokemons = async (name: String, typeParam: String) => {
    let listPokemons = [];
    listPokemons = (name <= input ? pokemons : pokemonsDisplayed).filter(pokemon => pokemon.name.toLowerCase().includes(name.toLowerCase()));
    
    
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

  console.log(pokemons);
  
  return (
    <>
      <h1 className={"font-bold text-3xl pb-4"}>Pokédex</h1>
      <input value={input} type="text" onChange={handleInputChange}/>
      <select value={selectedType} onChange={handleSelection}>
        <option></option>
        {types.map(type => <option>{type.name}</option>)}
      </select>
      <ul>
        {pokemonsDisplayed.map((pokemon, index) => (
          <li key={index}>
            <Link href={`/${pokemon.slug}`}>
              <img src={pokemon.sprites.normal.male} alt={`${pokemon.name} sprite`} />
              {pokemon.name}
            </Link>
          </li>
          ))}
      </ul>
    </>
  );
}
