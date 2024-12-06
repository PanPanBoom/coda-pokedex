import { Pokemon } from "./Pokemon";
import { PokemonSwitchElement } from "./PokemonSwitchElement";

type PokemonSwitchProps = {
    previousPokemon: {};
    nextPokemon: {};
}

export const PokemonSwitch = (props: PokemonSwitchProps) => {
    return (
        <section className="flex inline-flex">
            <PokemonSwitchElement pokemon={props.previousPokemon} next={false}/>
            <PokemonSwitchElement pokemon={props.nextPokemon} next={true}/>
        </section>
    )
}