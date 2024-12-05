import { createContext, useState } from "react";

export const TeamContext = createContext({
    team: [],
    setTeam: (team: []) => {},
});

type TeamProviderProps = {
    children: React.ReactNode;
};

export const TeamProvider = (props: TeamProviderProps) => {
    const [team, setTeam] = useState([]);
    return (
        <TeamContext.Provider value={{team, setTeam}}>
            {props.children}
        </TeamContext.Provider>
    )
};