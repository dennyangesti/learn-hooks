import { useState, useEffect } from "react";

function useTitleInput(initialState) {
  const [value, setValue] = useState(initialState);
  useEffect(() => {
    document.title = value;
  });
  return [value, setValue];
}

export { useTitleInput };
