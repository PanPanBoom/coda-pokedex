import { useState, useEffect, useContext } from "react";
import { TeamContext } from "../contextes/TeamContext";
import { Type } from "./Type";

export const TeamInformationsTypes = () => {
    const [teamTypes, setTeamTypes] = useState([]);
    const teamContext = useContext(TeamContext);

    const team = teamContext.team;

    useEffect(() => {
        orderedTeamTypes();
    }, [team]);

    const orderedTeamTypes= () => {
        let typesCounter = {};
        team.forEach(pokemon => {
            pokemon.types.forEach(type => {
                if(Object.keys(typesCounter).includes(type.name))
                    typesCounter[type.name]++;
                else
                    typesCounter[type.name] = 1;
            });
        });

        let typesCounterList = [];
        Object.keys(typesCounter).forEach(name => {typesCounterList.push({"name": name, "count": typesCounter[name]})});

        const types = typesCounterList.sort((a, b) => {
            if(a.count < b.count)
                return 1
            else if(a.count > b.count)
                return -1;
            else
            {
                for(let i = 0; i < a.name.length; i++)
                {
                    if(a.name[i] < b.name[i])
                        return -1;

                    else if(a.name[i] > b.name[i])
                        return 1;
                }
            }
        })

        setTeamTypes(types);
    }

    return (
        <div className="p-2">{teamTypes.map((type) => <Type className="mr-1" name={type.name}/>)}</div>
    )
}