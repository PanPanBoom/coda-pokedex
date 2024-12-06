import { useState } from "react";

type PokedexSearchProps = {
    types: [];
    filterPokemons: (input: string, selectedType: string) => void;
}

export const PokedexSearch = (props: PokedexSearchProps) => {
    const [input, setInput] = useState("");
    const [selectedType, setSelectedType] = useState("");

    const noType = "Aucun type";

    return (
        <section className="flex gap-1">

            <input placeholder="Chercher un pokémon..." className="border rounded-lg p-1" value={input} type="text" onChange={e => {
                setInput(e.target.value);
                props.filterPokemons(e.target.value, selectedType);
            }}/>

            <select className="rounded-lg p-1" value={selectedType} onChange={e => {
                setSelectedType(e.target.value);
                props.filterPokemons(input, (e.target.value !== noType ? e.target.value : ""));
            }}>
                <option>{noType}</option>
                {props.types.map((type, index) => <option key={index}>{type.name}</option>)}
            </select>

        </section>
    )  
};