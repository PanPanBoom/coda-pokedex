import { useState } from "react";

type TeamPokemonDisplayProps = {
    name: string;
    sprites: [];
}

export const TeamMainPokemonDisplay = (props: TeamPokemonDisplayProps) => {
    const [isShiny, setIsShiny] = useState(false);
    const [currentSprite, setCurrentSprite] = useState(props.sprites.normal.male);

    const handleCheckbox = () => {
        setCurrentSprite(isShiny ? props.sprites.normal.male : props.sprites.shiny.male);
        setIsShiny(!isShiny);
    }

    return (
        <article className="inline-flex bg-blue-300 rounded-md text-white text-shadow h-32 border-4 border-red-500 w-96 place-content-around">
            <img  src={currentSprite} alt="" />
            <p className="my-auto">{props.name.toUpperCase()}</p>
            <div className="flex flex-col my-auto">
                <label htmlFor="checkbox">Shiny</label>
                <input type="checkbox" checked={isShiny} onChange={handleCheckbox}/>
            </div>
        </article>
    );
};