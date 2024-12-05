type PokemonProps = {
    img: string;
    name: string;
}

export const Pokemon = (props: PokemonProps) => {
    return (
        <article>
            <img src={props.img} alt={`${props.name} sprite`} />
            {props.name}
        </article>
    )
};