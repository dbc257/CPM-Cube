import React from "react";
// import { connect } from "react-redux"
// import { Link } from "react-router-dom"
import "./LandingPage.css";

export default function HomePage() {
  // {pass in props onclick}

  const emojis = [
                  ["🐳", "spouting whale", "U+1F433	"], 
                  ["🐋", "whale", "U+1F40B	"], 
                  ["🐬", "dolphin", "U+1F42C	"], 
                  ["🐟", "fish", "U+1F41F	"], 
                  ["🐠", "tropical fish", "U+1F420	"], 
                  ["🐡", "blowfish", "U+1F421	"], 
                  ["🦈", "shark", "U+1F988	"], 
                  ["🐙", "octopus", "U+1F419	"], 
                  ["🐚", "spiral shell", "U+1F41A	"]
  ]

  emojis.map(e => e[0])
  return (
    <div className="wrapper">
      <div className="carousel">
        {emojis.map(e => {
          return (
            <div className="carousel__item">
              <div className="carousel__item-head">
                {e[0]}
              </div>
              <div className="carousel__item-body">
                <p className="title">{e[1]}</p>
                <p className="Unicode">{e[2]}</p>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  );
}


// .wrapper
//   .carousel
//     - emojis = [ ["🐳", "spouting whale", "U+1F433	"], 
//                  ["🐋", "whale", "U+1F40B	"], 
//                  ["🐬", "dolphin", "U+1F42C	"], 
//                  ["🐟", "fish", "U+1F41F	"], 
//                  ["🐠", "tropical fish", "U+1F420	"], 
//                  ["🐡", "blowfish", "U+1F421	"], 
//                  ["🦈", "shark", "U+1F988	"], 
//                  ["🐙", "octopus", "U+1F419	"], 
//                  ["🐚", "spiral shell", "U+1F41A	"] ]
    
//     - emojis.each do |i|
//       .carousel__item
//         .carousel__item-head
//           #{i[0]}
//         .carousel__item-body
//           %p.title #{i[1]}
//           %p Unicode: #{i[2]}