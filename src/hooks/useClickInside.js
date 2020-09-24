import { useEffect, useState } from "react";

const useClickInside = (element) => {
  const [clickInside, setClick] = useState(null);

  useEffect(() => {
    const handleClick = (event) => {
      setClick(element.current.contains(event.target));
    };

    document.addEventListener("click", handleClick);

    return () => document.removeEventListener("click", handleClick);
  }, [element]);

  return clickInside;
};

export default useClickInside;
