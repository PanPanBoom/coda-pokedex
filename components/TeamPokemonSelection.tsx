import { useState, useContext } from "react";
import { TeamContext } from "../contextes/TeamContext";
import { useData } from "vike-react/useData";
import type { Data } from "../pages/team/+data";

export const TeamPokemonSelection = () => {
    const pokemons = useData<Data>();
    const [selectedPokemon, setSelectedPokemon] = useState(pokemons[0].name);
    const teamContext = useContext(TeamContext);

    const {team, setTeam} = teamContext;

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
        
        pokemons.forEach(async (pokemon) => {
            if(pokemon.name === selectedPokemon)
                setTeam([...team, pokemon]);
        });
    }
    
    return (
        <section>
            <select value={selectedPokemon} onChange={e => setSelectedPokemon(e.target.value)}>
                {pokemons.map(pokemon => <option value={pokemon.name}>{pokemon.name}</option>)}
            </select>
            <button onClick={handleClick}>Ajouter</button>
        </section>
    )
};