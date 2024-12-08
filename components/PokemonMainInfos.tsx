import { PokemonPhotoSelection } from "./PokemonPhotoSelection"
import { Title } from "./Title"
import { Type } from "./Type"

type PokemonMainInfosProps = {
    name: string;
    sprites: string;
}

export const PokemonMainInfos = (props: PokemonMainInfosProps) => {
    return (
        <article className="bg-purple-300 border-b-4 border-r-4 border-slate-500 p-2 text-white">
            <Title className="text-shadow">{props.name.toUpperCase()}</Title>
            <PokemonPhotoSelection sprites={props.sprites} name={props.name}/>
        </article>
    )
}