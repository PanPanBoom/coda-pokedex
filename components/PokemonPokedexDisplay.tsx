import { Type } from "./Type";

type PokemonPokedexDisplay = {
    pokemon: {};
}

export const PokemonPokedexDisplay = (props: PokemonPokedexDisplay) => {
    return (
        <article className="grid grid-cols-3 py-0.5 hover:border hover:rounded">
            <p>N°{("000" + props.pokemon.id).slice(-4)}</p>
            <p>{props.pokemon.name.toUpperCase()}</p>
            <ul className="inline-flex gap-1">
                {props.pokemon.types.map((type, index) => <li key={index}><Type name={type.name}/></li>)}
            </ul>
        </article>
    )
}