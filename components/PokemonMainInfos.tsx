import { PokemonPhotoSelection } from "./PokemonPhotoSelection"
import { Title } from "./Title"
import { Type } from "./Type"

type PokemonMainInfosProps = {
    name: string,
    sprites: string,
    types: []
}

export const PokemonMainInfos = (props: PokemonMainInfosProps) => {
    return (
        <article>
            <Title>{props.name}</Title>
            <PokemonPhotoSelection sprites={props.sprites} name={props.name}/>
            <ul className="inline-flex gap-1">
                {props.types.map((type, index) => <li key={index}><Type name={type.name}/></li>)}
            </ul>
        </article>
    )
}