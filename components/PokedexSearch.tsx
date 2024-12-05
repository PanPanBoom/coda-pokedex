import { useState } from "react";

type PokedexSearchProps = {
    types: [];
    filterPokemons: (input: string, selectedType: string) => void;
}

export const PokedexSearch = (props: PokedexSearchProps) => {
    const [input, setInput] = useState("");
    const [selectedType, setSelectedType] = useState("");

    return (
        <section>
            <input value={input} type="text" onChange={e => {
                setInput(e.target.value);
                props.filterPokemons(e.target.value, selectedType);
            }}/>
            <select value={selectedType} onChange={e => {
                setSelectedType(e.target.value);
                props.filterPokemons(input, e.target.value);
            }}>
                <option></option>
                {props.types.map((type, index) => <option key={index}>{type.name}</option>)}
            </select>
        </section>
    )  
};