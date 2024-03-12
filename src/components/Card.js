import React from "react"
// the card component needed to take hand as a prop(hand was undifined)
function Card({ hand }) {
  return (
    <div className="handStyles">
      {hand.map((card, index) => {
        return (
          <div className="cardStyles" key={index}>
            {card}
          </div>
        )
      })}
    </div>
  )
}

//
//needs to be exported
export default Card
