import { useContext } from "react";
import { TeamContext } from "../contextes/TeamContext";

export const Team = () => {
    const teamContext = useContext(TeamContext);

    const {team, setTeam} = teamContext;

    const handleDelete = (index: number) => {
        setTeam(team.filter((pokemon, indexDelete) => index !== indexDelete));
    }

    return (
        <ul>
            {team.map((pokemon, index) => <li key={index}>{pokemon.name}<button onClick={e => handleDelete(index)}>Supprimer</button></li>)}
        </ul>
    )
};