import React from "react";
import "../App.css";

function CharacterCard() {
    return (
        <div className="card h-100 shadow-sm swapi-card">
            <div className="card-body">
                <h5 className="card-title">Character Name</h5>
                <ul className="list-unstyled">
                    <li><strong>Height:</strong> 172</li>
                    <li><strong>Mass:</strong> 77</li>
                    <li><strong>Hair Color:</strong> Blond</li>
                    <li><strong>Skin Color:</strong> Fair</li>
                    <li><strong>Eye Color:</strong> Blue</li>
                    <li><strong>Birth Year:</strong> 19BBY</li>
                    <li><strong>Gender:</strong> Male</li>
                </ul>
            </div>
        </div>
    );
}

export default CharacterCard;
