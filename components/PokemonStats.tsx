type PokemonStatsProps = {
    stats: []
};

export const PokemonStats = (props: PokemonStatsProps) => {
    return (
        <article>
            <ul>
                {props.stats.map((stat, index) => <li key={index}>{stat.name}: {stat.base_stat}</li>)}
            </ul>
        </article>
    )
};