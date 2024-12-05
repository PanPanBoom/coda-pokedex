import { useConfig } from "vike-react/useConfig";
import { PageContextServer } from "vike/types";

export type Data = Awaited<ReturnType<typeof data>>;

export const data = async (pageContext: PageContextServer) => {
    const config = useConfig();
    const response = await fetch(`https://pokedex.coda.memento-dev.fr/pokemon/${pageContext.routeParams.slug}`, {
        headers: {Authorization: `Bearer ${import.meta.env.API_KEY}`}
    });
    const pokemon = await (response.json());

    config({
        title: pokemon.current.name
    })

    return pokemon.current;
};