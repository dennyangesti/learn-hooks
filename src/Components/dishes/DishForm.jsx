import React, { useRef } from "react";
import { useBodyScrollLock } from "../../hooks/bodyScrollLock";
import { useOnClickOutside } from "../../hooks/useOnClickOutside";

const DishForm = ({ setToggled }) => {
  const ref = useRef();

  useOnClickOutside(ref, () => setToggled(false));

  useBodyScrollLock();

  return (
    <div className="dish-card" ref={ref}>
      <form>
        <div className="form-row">
          <label htmlFor="name">Name: </label>
          <input type="text" id="name" />
        </div>
      </form>
    </div>
  );
};

export default DishForm;
