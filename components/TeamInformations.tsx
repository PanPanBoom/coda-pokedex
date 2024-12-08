import { useEffect, useState, useContext } from "react";
import { TeamInformationsTypes } from "./TeamInformationsTypes";
import { TeamContext } from "../contextes/TeamContext";
import { TeamInformationsStats } from "./TeamInformationsStats";

export const TeamInformations = () => {
    return (
        <article className="mt-3">
            <h2 className="text-2xl">Informations d'équipes</h2>
            <TeamInformationsTypes />
            <TeamInformationsStats />
        </article>
    )
};