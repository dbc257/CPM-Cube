import React from "react";
import "./LandingPage.css"

export default function HomePage() {
    return (
        <div class="grid">
            <button style={{ gridArea: 1 / 1 / 2 / 2 }}>Button 1</button>
            <button style={{ gridArea: 2 / 1 / 3 / 2 }}>Button 2</button>
        </div>
    )
}