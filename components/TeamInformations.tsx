import { useEffect, useState, useContext } from "react";
import { TeamInformationsTypes } from "./TeamInformationsTypes";
import { TeamContext } from "../contextes/TeamContext";
import { TeamInformationsStats } from "./TeamInformationsStats";

export const TeamInformations = () => {
    return (
        <article>
            <h2>Informations d'équipes</h2>
            <TeamInformationsStats />
            <TeamInformationsTypes />
        </article>
    )
};