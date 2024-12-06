type PokemonStatsProps = {
    stats: []
};

export const PokemonStats = (props: PokemonStatsProps) => {
    return (
        <article>
            <ul className="h-full text-3xl place-content-center">
                {props.stats.map((stat, index) => <li key={index}>{stat.name}: {stat.base_stat}</li>)}
            </ul>
        </article>
    )
};