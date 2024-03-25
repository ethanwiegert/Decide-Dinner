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
    <div>
      <div>
        <div className="">
          <p>Please note, options are based on restaurants located in the United States</p>
        </div>
      </div>

      <div
        className=""
      >
        <div className="">
          {choice === "" ? <h3>Press to choose:</h3> : <h3>Your choice is: {choice}!</h3>}
        </div>
      </div>

      <div className="">
        <div className="">
          {choice === "" ? null : <p>Not what you were hoping?</p>}
        </div>
      </div>

      <br />
      <br />

      <div className="">
        <div className="">
          {choice === "" ? (
            <button
              type="button"
              className=""
              onClick={() => setChoice(restaurants[NewRestaraunt()])}
            >
              Generate Restaurant
            </button>
          ) : (
            <button
              type="button"
              className=""
              onClick={() => setChoice(restaurants[NewRestaraunt()])}
            >
              Choose Again
            </button>
          )}
        </div>
      </div>
    </div>
  );
}


