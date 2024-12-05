import { useContext } from "react";
import { TeamContext } from "../contextes/TeamContext";

export const Team = () => {
    const teamContext = useContext(TeamContext);

    const {team, setTeam} = teamContext;

    return (
        <ul>
            {team.map((pokemon, index) => <li key={index}>{pokemon.name}</li>)}
        </ul>
    )
};