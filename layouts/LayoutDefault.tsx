import "./style.css";

import "./tailwind.css";

import React from "react";
import { Link } from "../components/Link.js";
import { TeamProvider } from "../contextes/TeamContext";

export default function LayoutDefault({ children }: { children: React.ReactNode }) {
  return (
    <div className={"flex max-w-5xl m-auto"}>
      <Sidebar>
        <Link href="/">Pokédex</Link>
        <Link href="/team">Équipe</Link>
      </Sidebar>
      <TeamProvider>
        <Content>{children}</Content>
      </TeamProvider>
    </div>
  );
}

function Sidebar({ children }: { children: React.ReactNode }) {
  return (
    <div id="sidebar" className={"p-5 flex flex-col shrink-0 border-r-2 border-r-gray-200"}>
      {children}
    </div>
  );
}

function Content({ children }: { children: React.ReactNode }) {
  return (
    <div id="page-container">
      <div id="page-content" className={"p-5 pb-12 min-h-screen"}>
        {children}
      </div>
    </div>
  );
}