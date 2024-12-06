import { useState } from "react";

type PokemonPhotoSelectionProps = {
    name: string;
    sprites: [];
}

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

export const PokemonPhotoSelection = (props: PokemonPhotoSelectionProps) => {
    const sprites = allSprites(props.sprites);
    const [selectedSprite, setSelectedSprite] = useState(props.sprites.normal.male);

    return (
        <div>
            {/* Current sprite displayed */}
            <img src={selectedSprite} alt={`${props.name} sprite`} className="w-60" />

            {/* All sprites */}
            <div className="flex flex-inline">
                {sprites.map(sprite => {
                    const styleSelected = (sprite === selectedSprite ? "filter grayscale border rounded-lg" : "cursor-pointer")
                    return <img src={sprite} onClick={e => setSelectedSprite(sprite)} className={styleSelected}></img>
                })}
            </div>
        </div>
    )
}