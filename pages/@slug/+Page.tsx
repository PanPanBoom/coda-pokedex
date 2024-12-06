import { useData } from "vike-react/useData";
import { PokemonMainInfos } from "../../components/PokemonMainInfos";
import { PokemonStats } from "../../components/PokemonStats";
import { PokemonSwitch } from "../../components/PokemonSwitch";
import { useContext } from "react";
import { TeamContext } from "../../contextes/TeamContext";

export default function PokemonPage() {
    const pokemonData = useData();
    const pokemon = pokemonData.current;
    const teamContext = useContext(TeamContext);
    const {team, setTeam} = teamContext;

    const handleClick = () => {
        let alreadyInTeam = false;

        team.forEach(pokemonInTeam => {
            if(pokemon.name === pokemonInTeam.name)
                alreadyInTeam = true;
        })

        if(alreadyInTeam)
            return;
        
        setTeam([...team, pokemon]);
    }

    return (
        <main>
            <PokemonMainInfos name={pokemon.name} sprites={pokemon.sprites} types={pokemon.types}/>
            <button disabled={team.length === 6} onClick={handleClick}>Ajouter à l'équipe</button>
            <PokemonStats stats={pokemon.stats} />
            <PokemonSwitch previousPokemon={pokemonData.previous} nextPokemon={pokemonData.next} />
        </main>
    );
}