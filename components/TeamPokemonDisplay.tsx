import { useContext, useEffect, useState } from "react";
import { TeamContext } from "../contextes/TeamContext";

type TeamPokemonDisplayProps = {
    name: string;
    sprites: [];
}

export const TeamPokemonDisplay = (props: TeamPokemonDisplayProps) => {
    const [isShiny, setIsShiny] = useState(false);
    const [currentSprite, setCurrentSprite] = useState(props.sprites.normal.male);
    const teamContext = useContext(TeamContext);

    const {team, setTeam} = teamContext;

    useEffect(() => {
        updateSprite();
    }, [team]);

    const handleCheckbox = () => {
        setCurrentSprite(isShiny ? props.sprites.normal.male : props.sprites.shiny.male);
        setIsShiny(!isShiny);
    }

    const updateSprite = () => {
        setCurrentSprite(isShiny ? props.sprites.shiny.male : props.sprites.normal.male);
    }

    return (
        <article className="inline-flex bg-blue-600 rounded-lg text-white text-shadow h-16 border border-black w-96 place-content-between">
            <img  src={currentSprite} alt="" />
            <p className="my-auto">{props.name.toUpperCase()}</p>
            <div className="flex flex-col">
                <label htmlFor="checkbox">Shiny</label>
                <input type="checkbox" checked={isShiny} onChange={handleCheckbox}/>
            </div>
        </article>
    );
};