import { useContext } from "react";
import { TeamContext } from "../contextes/TeamContext";
import { TeamPokemonDisplay } from "./TeamPokemonDisplay";
import { Button } from "./Button";
import { TeamMainPokemonDisplay } from "./TeamMainPokemonDisplay";

export const Team = () => {
    const teamContext = useContext(TeamContext);

    const {team, setTeam} = teamContext;

    const handleDelete = (index: number) => {
        setTeam(team.filter((pokemon, indexDelete) => index !== indexDelete));
    }

    return (
        <section className="flex bg-emerald-400 p-6 mt-2 place-content-around">
            { team.length > 0 ? <div className="flex flex-col gap-1"><TeamMainPokemonDisplay name={team[0].name} sprites={team[0].sprites}/><Button onClick={e => handleDelete(0)}>Supprimer</Button></div>: null}
            <ul className="flex flex-col gap-2">
                { team.map((pokemon, index) => index > 0 ? <li className="flex gap-2" key={index}><TeamPokemonDisplay name={pokemon.name} sprites={pokemon.sprites} /><Button onClick={e => handleDelete(index)}>Supprimer</Button></li> : null)}
            </ul>
        </section>
    )
};