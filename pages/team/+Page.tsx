import { Team } from "../../components/Team";
import { TeamPokemonSelection } from "../../components/TeamPokemonSelection";
import { useConfig } from "vike-react/useConfig";
import { TeamInformations } from "../../components/TeamInformations";
import { Title } from "../../components/Title";

export default function Page() {
    const config = useConfig();
    config({
        title: "Équipe"
    });

    return (
        <main>
            <Title>Équipe</Title>
            <TeamPokemonSelection />
            <Team />
            <TeamInformations />
        </main>
    )
}