import { useContext, useState } from "react";
import { Team } from "../../components/Team";
import { TeamPokemonSelection } from "../../components/TeamPokemonSelection";
import { useConfig } from "vike-react/useConfig";
import { TeamInformations } from "../../components/TeamInformations";
import { TeamContext, TeamProvider } from "../../contextes/TeamContext";

export default function Page() {
    const teamContext = useContext(TeamContext);

    const {team, setTeam} = teamContext;
    // const config = useConfig();
    // config({
    //     title: "Équipe"
    // });

    return (
        <main>
            <h1>Équipe</h1>
            <TeamPokemonSelection />
            <Team />
            <TeamInformations />
        </main>
    )
}