type PokemonPokedexDisplay = {
    pokemon: {};
}

export const PokemonPokedexDisplay = (props: PokemonPokedexDisplay) => {
    return (
        <article className="flex flex-inline">
            <p>N°{("000" + props.pokemon.id).slice(-4)} {props.pokemon.name.toUpperCase()}</p>
        </article>
    )
}