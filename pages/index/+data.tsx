export type Data = Awaited<ReturnType<typeof data>>;

export const data = async () => {
    let responsePokemons = await fetch("https://pokedex.coda.memento-dev.fr/pokemon?with=types&limit=90", {
        headers: {Authorization: `Bearer ${import.meta.env.API_KEY}`}
    });
    let pokemons = await responsePokemons.json();
    let pokemonsList = [];
    const limit = 90;
    let i = 1;
    while(pokemons.length == 90)
    {
        pokemonsList.push(...pokemons);
        responsePokemons = await fetch(`https://pokedex.coda.memento-dev.fr/pokemon?with=types&limit=90&offset=${limit*(i++)}`, {
            headers: {Authorization: `Bearer ${import.meta.env.API_KEY}`}
        });
        pokemons = await responsePokemons.json();
    }

    pokemonsList.push(...pokemons);

    const responseTypes = await fetch("https://pokedex.coda.memento-dev.fr/type", {
        headers: {Authorization: `Bearer ${import.meta.env.API_KEY}`}
    });
    const types = await responseTypes.json();

    return [pokemonsList, types];
};