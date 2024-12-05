import { useData } from "vike-react/useData";
import type { Data } from "./+data";
import { useState } from "react";

export default function Page() {
    const [team, setTeam] = useState([]);
    const pokemons = useData<Data>();
    const [selectedPokemon, setSelectedPokemon] = useState(pokemons[0].name);

    const handleClick = () => {
        if(team.length === 6)
            return;

        let alreadyInTeam = false;

        team.forEach(pokemon => {
            if(pokemon.name === selectedPokemon)
                alreadyInTeam = true;
        })

        if(alreadyInTeam)
            return;

        pokemons.forEach(pokemon => {
            if(pokemon.name === selectedPokemon)
                setTeam([...team, pokemon]);
        });
    }

    console.log(selectedPokemon);

    return (
        <main>
            <h1>Équipe</h1>
            <ul>
                <select value={selectedPokemon} onChange={e => setSelectedPokemon(e.target.value)}>
                    {pokemons.map(pokemon => <option value={pokemon.name}>{pokemon.name}</option>)}
                </select>
                <button onClick={handleClick}>Ajouter</button>
                {team.map((pokemon, index) => <li>{pokemon.name}</li>)}
            </ul>
        </main>
    )
}