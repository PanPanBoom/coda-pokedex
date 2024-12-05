import { useData } from "vike-react/useData";

export default function PokemonPage() {
    const pokemonData = useData();

    return (
        <main>
            <h1>{pokemonData.name}</h1>
            <img src={pokemonData.sprites.normal.male} alt="" />
            <img src={pokemonData.sprites.normal.female} alt="" />
            <img src={pokemonData.sprites.shiny.male} alt="" />
            <ul>
                {pokemonData.types.map((type, index) => <li key={index}>{type.name}</li>)}
            </ul>
            <ul>
                {pokemonData.stats.map((stat, index) => <li key={index}>{stat.name}: {stat.base_stat}</li>)}
            </ul>
        </main>
    );
}