import { Pokemon } from "./Pokemon";
import { PokemonSwitchElement } from "./PokemonSwitchElement";

type PokemonSwitchProps = {
    previousPokemon: {};
    nextPokemon: {};
}

export const PokemonSwitch = (props: PokemonSwitchProps) => {
    return (
        <section className="w-full inline-flex place-content-between border-x-4 border-b-4 border-yellow-100 p-3">
            <PokemonSwitchElement pokemon={props.previousPokemon} next={false}/>
            <PokemonSwitchElement pokemon={props.nextPokemon} next={true}/>
        </section>
    )
}