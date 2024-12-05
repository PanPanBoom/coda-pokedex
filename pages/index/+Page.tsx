import React from "react";
import { useData } from "vike-react/useData";
import type { Data } from "./+data";
import { Link } from "../../components/Link";

export default function Page() {
  const pokemons = useData<Data>();
  console.log(pokemons);
  return (
    <>
      <h1 className={"font-bold text-3xl pb-4"}>Pokédex</h1>
      <ul>
        {pokemons.map((pokemon, index) => <li key={index}><Link href={`/${pokemon.slug}`}>{pokemon.name}</Link></li>)}
      </ul>
    </>
  );
}
