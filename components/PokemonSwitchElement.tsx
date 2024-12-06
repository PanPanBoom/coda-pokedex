import { Link } from "./Link";
import { Pokemon } from "./Pokemon";

type PokemonSwitchElementProps = {
    pokemon: {};
    next: boolean;
}

export const PokemonSwitchElement = (props: PokemonSwitchElementProps) => {
    return (
        <Link href={`/${props.pokemon.slug}`}>
            <Pokemon name={`${!props.next ? "<" : ""} ${props.pokemon.name} ${props.next ? ">" : ""}`} img={props.pokemon.sprites.normal.male}/>
        </Link>
    )
}