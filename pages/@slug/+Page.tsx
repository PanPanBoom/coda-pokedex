import { useData } from "vike-react/useData";
import { PokemonMainInfos } from "../../components/PokemonMainInfos";
import { PokemonStats } from "../../components/PokemonStats";
import { PokemonSwitch } from "../../components/PokemonSwitch";
import { useContext } from "react";
import { TeamContext } from "../../contextes/TeamContext";
import { Button } from "../../components/Button";

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
        console.log("success");
    }

    return (
        <main className="h-full border-4 border-slate-500 bg-yellow-200">
            <section className="flex">
                <PokemonMainInfos name={pokemon.name} sprites={pokemon.sprites}/>
                <PokemonStats stats={pokemon.stats} types={pokemon.types}/>
            </section>
            <Button disabled={team.length === 6} onClick={handleClick}>Ajouter à l'équipe</Button>
            <PokemonSwitch previousPokemon={pokemonData.previous} nextPokemon={pokemonData.next} />
        </main>
    );
}