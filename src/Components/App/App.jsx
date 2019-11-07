import React, { useState, useEffect, createContext, useMemo } from "react";
import { useSpring, animated } from "react-spring";
import Toggle from "../Toggle";
import Counter from "../Counter";
import { useTitleInput } from "../../hooks/useTitleInput";

export const userContext = createContext();

const App = () => {
  const [name, setName] = useTitleInput("");
  const [dishes, setDishes] = useState([]);

  const fetchData = async () => {
    console.log("fetching data");
    const res = await fetch(
      "https://my-json-server.typicode.com/leveluptuts/fakeapi/dishes"
    );
    const data = await res.json();
    setDishes(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const props = useSpring({ opacity: 1, from: { opacity: 0 } });

  const reverseWord = word => {
    console.log("Function is called");
    return word
      .split("")
      .reverse()
      .join("");
  };

  const title = "Level Up Dishes";
  const titleReverse = useMemo(() => reverseWord(title), [title]);

  return (
    <userContext.Provider
      value={{
        user: true
      }}
    >
      <div className="main-wrapper">
        <h1>{titleReverse}</h1>
        <form
          onSubmit={e => {
            e.preventDefault();
          }}
        >
          <Toggle />
          <Counter />
          <input
            type="text"
            onChange={e => setName(e.target.value)}
            value={name}
          />
          <button>Submit</button>
        </form>
      </div>
      <animated.h1 style={props}>{title}</animated.h1>
      {dishes.map((dish, index) => (
        <article className="dish-card dish-card--withImage" key={index}>
          <h3>{dish.name}</h3>
          <p>{dish.desc}</p>
          <div className="ingredients">
            {dish.ingredients.map((ingredient, index) => (
              <span key={index}>{ingredient}</span>
            ))}
          </div>
        </article>
      ))}
    </userContext.Provider>
  );
};

export default App;
