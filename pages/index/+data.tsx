export type Data = Awaited<ReturnType<typeof data>>;

export const data = async () => {
    const response = await fetch("https://pokedex.coda.memento-dev.fr/pokemon", {
        headers: {Authorization: `Bearer ${import.meta.env.API_KEY}`}
    });
    const pokemons = await response.json();

    return pokemons;
};