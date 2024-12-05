import { useData } from "vike-react/useData";
import { PokemonMainInfos } from "../../components/PokemonMainInfos";
import { PokemonStats } from "../../components/PokemonStats";

export default function PokemonPage() {
    const pokemonData = useData();

    console.log(pokemonData);

    return (
        <main>
            <PokemonMainInfos name={pokemonData.name} sprite={pokemonData.sprites.normal.male} types={pokemonData.types}/>
            <PokemonStats stats={pokemonData.stats} />
        </main>
    );
}