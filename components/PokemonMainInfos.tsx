import { PokemonPhotoSelection } from "./PokemonPhotoSelection"

type PokemonMainInfosProps = {
    name: string,
    sprites: string,
    types: []
}

export const PokemonMainInfos = (props: PokemonMainInfosProps) => {
    return (
        <article>
            <h1>{props.name}</h1>
            <PokemonPhotoSelection sprites={props.sprites} name={props.name}/>
            <ul>
                {props.types.map((type, index) => <li key={index}>{type.name}</li>)}
            </ul>
        </article>
    )
}