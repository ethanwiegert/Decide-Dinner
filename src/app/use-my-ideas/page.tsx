'use client'
import { useState } from "react";

export default function UseMyIdeas() {


    const [name, setName] = useState<string>("");
    const [list, setList] = useState<string[]>([]);
    const [restaurant, setRestaurant] = useState<string>("");
    const [display, setDisplay] = useState<boolean>(false);
  
    function getRandomInt(max:number) {
      return Math.floor(Math.random() * max);
    }
  
    const submitHandler = (event: any) => {
      event.preventDefault();
      if (list.length < 2) {
        setRestaurant("");
      }
      if (list.length >= 2 && display) {
        let count = list.length;
        const picked = getRandomInt(count);
        setRestaurant(`Your choice is: ${list[picked]}`);
      }
    };
  
    return (
        <div>
        <div className="">
          <h2>Add Your Ideas</h2>
        </div>
  
        <div className="">
          <h6>Any list changes will reset your choice.</h6>
        </div>
  
        <div className="">
          <form onSubmit={submitHandler}>
            <div className="">
              <input
                className=""
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <button
                className=""
                onClick={() => {
                  setList([...list, name ]);
                  setName("");
                  setRestaurant("");
                  console.log(list)
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="currentColor"
                  className=""
                  viewBox="0 0 15 20"
                >
                  <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3z" />
                </svg>
              </button>
            </div>
            {list.length > 0 ? null : <h3>Your List:</h3>}
  
            {list.map((item) => (
              <div key={item} className="">
         
                  <div className="col-6">
                    <p>{item}</p>
                  </div>
                  <div className="col-6 pb-3">
                    <button
                      className=""
                      onClick={() => {
                        setList(list.filter((a) => a !== item));
                        setRestaurant("");
                      }}
                    >
                        Delete
                    </button>
                  </div>
              </div>
            ))}
  
            <br />
  
            <div className="">
              {list.length >= 2 ? (
                <button
                  type="submit"
                  name="submit"
                  onClick={() => setDisplay(true)}
                  className=""
                >
                  Choose
                </button>
              ) : null}
            </div>
          </form>
        </div>
  
        <br />
  
        <div className="">
          <h4 id="result">{restaurant}</h4>
        </div>
  
        <br />
  
        </div>
    );
}