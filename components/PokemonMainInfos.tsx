type PokemonMainInfosProps = {
    name: string,
    sprite: string,
    types: []
}

export const PokemonMainInfos = (props: PokemonMainInfosProps) => {
    return (
        <article>
            <h1>{props.name}</h1>
            <img src={props.sprite} alt={`${props.name} sprite`} />
            <ul>
                {props.types.map((type, index) => <li key={index}>{type.name}</li>)}
            </ul>
        </article>
    )
}