import { useEffect, useState, useContext } from "react";
import { TeamContext } from "../contextes/TeamContext";

type TeamPokemonDisplayProps = {
    name: string;
    sprites: [];
}

export const TeamMainPokemonDisplay = (props: TeamPokemonDisplayProps) => {
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