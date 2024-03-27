'use client'
import { useState } from "react";


const other = [
  "Chick-fil-A",
  "Jimmy John's",
  "KFC",
  "Papa Johns",
  "Domino's",
  "Pizza Hut",
  "Arby's",
  "Panda Express",
  "Burger King",
  "Subway",
];

const breakfast= [
  "Chick-fil-A",
  "Starbucks",
  "Dunkin' Donuts",
]

function getRandomInt(max: number) {
  return Math.floor(Math.random() * max);
}

export default function PickPopular() {
  const [choice, setChoice] = useState("");
  const [restaurants, setRestaurants] = useState(other)

  function NewRestaraunt() {
    return getRandomInt(restaurants.length);
  }



  return (
    <div className="flex items-center flex-col justify-center p-4">
      <p className="p-2">Please note, options are based on restaurants located in the United States</p>
        {choice === "" ? <h3 className="p-2">Press to choose:</h3> : <h3 className="p-2">Your choice is: {choice}!</h3>}

      <div className="flex flex-col items-center justify-center p-4">
      {choice === "" ? null : <p className="p-5">Not what you were hoping?</p>}
          {choice === "" ? (
            <button
              type="button"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-4 px-4 rounded animate-pulse"
              onClick={() => setChoice(restaurants[NewRestaraunt()])}
            >
              Generate Restaurant
            </button>
          ) : (
            <button
              type="button"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-4 px-4 rounded animate-pulse"
              onClick={() => setChoice(restaurants[NewRestaraunt()])}
            >
              Choose Again
            </button>
          )}
        </div>
    </div>
  );
}


