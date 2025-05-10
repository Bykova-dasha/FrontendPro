import React from "react";
import ReactDOM from "react-dom/client";
import CharacterCard from "./components/CharacterCard";
import "./styles.css"; // або App.css

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <div className="container py-5">
        <h1 className="text-center mb-4">SWAPI Character</h1>
        <CharacterCard />
    </div>
);
