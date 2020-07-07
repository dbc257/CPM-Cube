import React from "react";
import { connect } from "react-redux"
import { Link } from "react-router-dom"
import "./LandingPage.css"

export default function HomePage() {
    // {pass in props onclick}




    return (
      <div class="grid">
        {/* <Link to="/charts/:id"> */}
            <button style={{ gridArea: 1 / 1 / 2 / 2 }}>
                Button 1
            </button>
            <button style={{ gridArea: 2 / 1 / 3 / 2 }}>
                Button 2
            </button>
        {/* </Link> */}
      </div>
    );
}

