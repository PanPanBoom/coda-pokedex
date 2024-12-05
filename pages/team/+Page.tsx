import { useData } from "vike-react/useData";
import type { Data } from "./+data";
import { useEffect, useState } from "react";

export default function Page() {
    const [team, setTeam] = useState([]);
    const pokemons = useData<Data>();
    const [selectedPokemon, setSelectedPokemon] = useState(pokemons[0].name);
    const [teamStats, setTeamStats] = useState([]);
    const [teamTypes, setTeamTypes] = useState([]);

    useEffect(() => {
        averageStats();
        orderedTeamTypes();
    }, [team]);

    const handleClick = () => {
        if(team.length === 6)
            return;

        let alreadyInTeam = false;

        team.forEach(pokemon => {
            if(pokemon.name === selectedPokemon)
                alreadyInTeam = true;
        })

        if(alreadyInTeam)
            return;
        
        pokemons.forEach(async (pokemon) => {
            if(pokemon.name === selectedPokemon)
            {
                const response = await fetch(`https://pokedex.coda.memento-dev.fr/pokemon/${pokemon.slug}`, {
                    headers: {Authorization: `Bearer ${import.meta.env.API_KEY}`}
                });
                const pokemonObject = (await response.json()).current;

                setTeam([...team, pokemonObject]);
            }
        });
    }
    
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
        console.log(typesCounterList);

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

        // let typesOrderedByCount = [];
        // let currentMax = Math.max(...Object.values(typesCounter));
        // let currentMaxTypes = [];
        // const typesCounterLength = Object.keys(typesCounter).length;
        // while(types.length < typesCounterLength)
        // {
        //     const max = Math.max(...Object.values(typesCounter));
        //     if(currentMax === max)
        //     {
        //         const keyMax = Object.keys(typesCounter).find(key => typesCounter[key] === max);
        //         currentMaxTypes.push(keyMax);
        //         typesCounter = Object.fromEntries(
        //             Object.entries(typesCounter).filter(([key]) => key !== keyMax)
        //         );
        //     }

        //     else
        //     {
        //         typesOrderedByCount.push(currentMaxTypes);
        //         currentMaxTypes.
        //     }
        // }

        setTeamTypes(types);
    }

    return (
        <main>
            <h1>Équipe</h1>
            <ul>
                <select value={selectedPokemon} onChange={e => setSelectedPokemon(e.target.value)}>
                    {pokemons.map(pokemon => <option value={pokemon.name}>{pokemon.name}</option>)}
                </select>
                <button onClick={handleClick}>Ajouter</button>
                {team.map((pokemon, index) => <li>{pokemon.name}</li>)}
            </ul>
            <h2>Informations d'équipes</h2>
            <ul>
                {teamStats.map((stat, index) => <li key={index}>{stat.name}: {stat.base_stat}</li>)}
            </ul>
            <p>Types: {teamTypes.map((type, index) => `${type.name} (${type.count})${index + 1 === teamTypes.length ? "" : ", "}`)}</p>
        </main>
    )
}