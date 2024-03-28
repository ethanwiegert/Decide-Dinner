import { useState } from "react";

export default function UseMyIdeas() {


    const [name, setName] = useState<string>("");
    const [list, setList] = useState<{name: string}[]>([]);
    const [restaurant, setRestaurant] = useState<string>("");
    const [display, setDisplay] = useState<boolean>(false);
  
    function getRandomInt(max:number) {
      return Math.floor(Math.random() * max);
    }
  
    const submitHandler = () => {
      
      if (list.length < 2) {
        setRestaurant("");
      }
      if (list.length >= 2 && display) {
        let count = list.length;
        const picked = getRandomInt(count);
        setRestaurant(`Your choice is: ${list[picked].name}`);
      }
    };
  
    return (
        <div>
        <div className="d-flex justify-content-center p-4">
          <h2>Add Your Ideas</h2>
        </div>
  
        <div className="d-flex justify-content-center pt-1">
          <h6>Any list changes will reset your choice.</h6>
        </div>
  
        <div className="d-flex justify-content-center">
          <form onSubmit={submitHandler}>
            <div className="mt-2 mb-3">
              <input
                className="m-2 p-2"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <button
                className="btn btn-success p-2 m-2"
                onClick={() => {
                  setList([...list, { name: name }]);
                  setName("");
                  setRestaurant("");
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="currentColor"
                  className="bi bi-plus-circle-fill"
                  viewBox="0 0 15 20"
                >
                  <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3z" />
                </svg>
              </button>
            </div>
            {list.length > 0 ? null : <h3>Your List:</h3>}
  
            {list.map((item) => (
              <div key={item.name} className="row d-flex justify-content-center">
         
                  <div className="col-6">
                    <p>{item.name}</p>
                  </div>
                  <div className="col-6 pb-3">
                    <button
                      className="btn btn-danger"
                      onClick={() => {
                        setList(list.filter((a) => a.name !== item.name));
                        setRestaurant("");
                      }}
                    >
                        Delete
                    </button>
                  </div>
              </div>
            ))}
  
            <br />
  
            <div className="d-flex justify-content-center pb-5">
              {list.length >= 2 ? (
                <button
                  type="submit"
                  name="submit"
                  onClick={() => setDisplay(true)}
                  className="col-6 btn btn button-flip"
                >
                  Choose
                </button>
              ) : null}
            </div>
          </form>
        </div>
  
        <br />
  
        <div className="d-flex justify-content-center pb-5">
          <h4 id="result">{restaurant}</h4>
        </div>
  
        <br />
  
        </div>
    );
}