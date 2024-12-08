import { useEffect, useState } from "react";

type PokemonPhotoSelectionProps = {
    name: string;
    sprites: [];
}

export const PokemonPhotoSelection = (props: PokemonPhotoSelectionProps) => {
    const [selectedSprite, setSelectedSprite] = useState(props.sprites.normal.male);

    useEffect(() => {
        setSelectedSprite(props.sprites.normal.male);
    }, [props.sprites])

    const allSprites = (sprites: []) => {
        let allSprites = [];
        Object.keys(sprites).forEach(cat => {
            Object.keys(sprites[cat]).forEach(gender => {
                const sprite = sprites[cat][gender];
                if(sprite !== null)
                    allSprites.push(sprite);
            })
        })
    
        return allSprites;
    }

    const sprites = allSprites(props.sprites);

    return (
        <div className="flex flex-col">
            {/* Current sprite displayed */}
            <img src={selectedSprite} alt={`${props.name} sprite`} className="h-96 bg-gray-100 px-20 border-2 border-purple-400" />

            {/* All sprites */}
            <div className="inline-flex place-self-center">
                {sprites.map(sprite => <img src={sprite} onClick={e => setSelectedSprite(sprite)} className={(sprite === selectedSprite ? "filter grayscale border rounded-lg" : "cursor-pointer") + " mt-2"}></img>)}
            </div>
        </div>
    )
}