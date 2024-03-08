import React, { useState } from "react"
import Card from "./components/Card"
import "./App.css"

const App = () => {
  const suit = ["❤️", "♦️", "♠️", "♣️"]
  const rank = [
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K",
    "A"
  ]
  const [hand, setHand] = useState([])

  const drawCard = () => {
     // 1) this takes the rank and suit arrays and (defines) randomizes them
    const draw = `${rank[Math.floor(Math.random() * rank.length)]} ${
      suit[Math.floor(Math.random() * suit.length)]
    }`
     // 2) indexOf returns -1 if value is not defined so it will equal -1
    if (hand.indexOf(draw) === -1) {
      // 3)  adds a new card to the hand of cards by updating the state of hand 
      setHand([...hand, draw])
      // 4) check if the length of the hand array is not equal to 52
    } else if (hand.length !== 52) {
      // 5) // draw a new card
      drawCard()
      // 6) if all else falls
    } else {
      // 7) when all cards are drawn
      alert("All cards have been dealt.")
    }
  }
  // No need to change anything ABOVE this line ^

  const shuffleCards = () => {setHand([])
  }

  return (
    // was missing a parent element <div></div> 
    // had to add functionality to shuffleCards
  <div>  
    <h1>Draw a Card</h1>
    <button onClick={drawCard}>Click to Draw a Card</button>
    <button onClick={shuffleCards}> Return Cards and Shuffle Deck</button>
    <Card hand={hand}/>
  </div>
  )
}

export default App
