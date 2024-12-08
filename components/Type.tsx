type TypeProps = {
    name: string;
    className: string;
}

export const Type = (props: TypeProps) => {
    let bg_color = "";

    switch(props.name.toLowerCase())
    {
        case "feu":
            bg_color = "bg-orange-500";
            break;

        case "eau":
            bg_color = "bg-blue-500";
            break;

        case "plante":
            bg_color = "bg-green-500";
            break;

        case "poison":
            bg_color = "bg-purple-500";
            break;

        case "normal":
            bg_color = "bg-gray-400";
            break;

        case "électrik":
            bg_color = "bg-yellow-400";
            break;

        case "sol":
            bg_color = "bg-yellow-900";
            break;

        case "fée":
            bg_color = "bg-pink-300";
            break;

        case "glace":
            bg_color = "bg-cyan-200";
            break;

        case "acier":
            bg_color = "bg-gray-200";
            break;

        case "vol":
            bg_color = "bg-cyan-400";
            break;

        case "insecte":
            bg_color = "bg-green-300";
            break;

        case "ténèbres":
            bg_color = "bg-slate-800";
            break;

        case "combat":
            bg_color = "bg-yellow-600";
            break;

        case "psy":
            bg_color = "bg-purple-800";
            break;

        case "spectre":
            bg_color = "bg-purple-300";
            break;

        case "dragon":
            bg_color = "bg-blue-900";
            break;

        case "roche":
            bg_color = "bg-amber-100";
            break;

        default:
            throw new Error("Type non reconnu");
    }

    return (
        <span className={props.className + ` ${bg_color} px-3 rounded text-white text-shadow`}>{props.name.toUpperCase()}</span>
    );
};