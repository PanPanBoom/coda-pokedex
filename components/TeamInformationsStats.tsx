import { useState, useContext, useEffect } from "react";
import { TeamContext } from "../contextes/TeamContext";

export const TeamInformationsStats = () => {
    const [teamStats, setTeamStats] = useState([]);
    const teamContext = useContext(TeamContext);

    const team = teamContext.team;

    useEffect(() => {
        averageStats();
    }, [team]);

    const averageStats = () => {
        let stats = [];
        team.forEach((pokemon, index) => {
            if(index === 0)
                pokemon.stats.forEach(stat => stats.push({"name": stat.name, "base_stat": stat.base_stat}));
            else
                pokemon.stats.forEach((stat, indexStat) => stats[indexStat].base_stat += stat.base_stat);
        });
    
        stats = stats.map(stat => { return {"name": stat.name, "base_stat": Math.round(stat.base_stat / team.length)}});
        setTeamStats(stats);
    }

    return (
        <ul>
            {teamStats.map((stat, index) => <li key={index}>{stat.name}: {stat.base_stat}</li>)}
        </ul>
    )
}