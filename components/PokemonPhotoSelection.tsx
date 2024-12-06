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