import { puppyList } from "./data.js";
import { useState } from "react";
import "./App.css";

function App() {
  const [puppies, setPuppies] = useState(puppyList);
  const [featPupId, setFeatPupId] = useState(null);
  const featuredPup = puppies.find((pup) => pup.id === featPupId);
  console.log(featuredPup);
  // console.log(puppies);

  return (
    <>
      <div className="App">
        {puppies.map((puppy) => {
          return (
            <p
              className="p"
              onClick={() => {
                setFeatPupId(puppy.id);
              }}
              key={puppy.id}
            >
              {puppy.name}
            </p>
          );
        })}
        {featPupId && (
          <div>
            <h2 className="puppyname">{featuredPup.name}</h2>
            <ul className="ul">
              <li className="listItem">Age: {featuredPup.age}</li>
              <li className="listItem">Email: {featuredPup.email}</li>
            </ul>
          </div>
        )}
      </div>
    </>
  );
}

export default App;
