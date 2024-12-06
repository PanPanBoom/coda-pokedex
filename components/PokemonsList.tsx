import { Link } from "./Link";
import { Pokemon } from "./Pokemon"
import { PokemonPokedexDisplay } from "./PokemonPokedexDisplay";

type PokemonsListProps = {
    pokemons: []
}

export const PokemonsList = (props: PokemonsListProps) => {
    return (
        <ul className="mt-4">
            {props.pokemons.map((pokemon, index) => (
                <li key={index}>
                    <Link href={`/${pokemon.slug}`}>
                        {/* <Pokemon img={pokemon.sprites.normal.male} name={pokemon.name} /> */}
                        <PokemonPokedexDisplay pokemon={pokemon} />
                    </Link>
                </li>
            ))}
        </ul>
    )
};