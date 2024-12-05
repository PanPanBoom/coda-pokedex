import { Link } from "./Link";
import { Pokemon } from "./Pokemon"

type PokemonsListProps = {
    pokemons: []
}

export const PokemonsList = (props: PokemonsListProps) => {
    return (
        <ul>
            {props.pokemons.map((pokemon, index) => (
                <li key={index}>
                    <Link href={`/${pokemon.slug}`}>
                        <Pokemon img={pokemon.sprites.normal.male} name={pokemon.name} />
                    </Link>
                </li>
            ))}
        </ul>
    )
};