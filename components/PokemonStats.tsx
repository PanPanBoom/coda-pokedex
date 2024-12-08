import { Type } from "./Type";

type PokemonStatsProps = {
    stats: [],
    types: []
};

export const PokemonStats = (props: PokemonStatsProps) => {
    return (
        <article className="p-2 border-x-4 border-t-4 border-yellow-100 flex-1 flex flex-col">
            <ul className="inline-flex gap-1 text-2xl">
                {props.types.map((type, index) => <li key={index}><Type name={type.name}/></li>)}
            </ul>
            <div className="text-4xl flex place-content-between items-center my-auto">
                <ul className="text-white text-shadow">
                    {props.stats.map((stat, index) => <li className="bg-gray-500 rounded-lg my-1" key={index}><p>{stat.name.toUpperCase()}</p></li>)}
                </ul>
                <ul className="flex-initial w-32">
                    {props.stats.map((stat, index) => <li className="my-1 bg-yellow-100" key={index}>{stat.base_stat}{stat.name === "PV" ? "/" + stat.base_stat : ""}</li>)}
                </ul>
            </div>
        </article>
    )
};