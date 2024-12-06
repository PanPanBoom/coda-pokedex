import { useData } from "vike-react/useData";
import { PokemonMainInfos } from "../../components/PokemonMainInfos";
import { PokemonStats } from "../../components/PokemonStats";
import { PokemonSwitch } from "../../components/PokemonSwitch";

export default function PokemonPage() {
    const pokemonData = useData();
    const pokemon = pokemonData.current;

    console.log(pokemonData);

    return (
        <main>
            <PokemonMainInfos name={pokemon.name} sprites={pokemon.sprites} types={pokemon.types}/>
            <PokemonStats stats={pokemon.stats} />
            <PokemonSwitch previousPokemon={pokemonData.previous} nextPokemon={pokemonData.next} />
        </main>
    );
}