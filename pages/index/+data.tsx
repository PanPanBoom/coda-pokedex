export type Data = Awaited<ReturnType<typeof data>>;

export const data = async () => {
    const responsePokemons = await fetch("https://pokedex.coda.memento-dev.fr/pokemon", {
        headers: {Authorization: `Bearer ${import.meta.env.API_KEY}`}
    });
    const pokemons = await responsePokemons.json();

    const responseTypes = await fetch("https://pokedex.coda.memento-dev.fr/type", {
        headers: {Authorization: `Bearer ${import.meta.env.API_KEY}`}
    });
    const types = await responseTypes.json();

    return [pokemons, types];
};