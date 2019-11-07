import React, { useState, useContext } from "react";
import { userContext } from "./App/App";
import DishForm from "./dishes/DishForm";

const Toggle = () => {
  const [isToggled, setToggled] = useState(false);
  const userInfo = useContext(userContext);
  if (!userInfo.user) return null;

  return (
    <div>
      {isToggled ? (
        <DishForm setToggled={setToggled} />
      ) : (
        <button onClick={() => setToggled(!isToggled)}>Open</button>
      )}
    </div>
  );
};

export default Toggle;
