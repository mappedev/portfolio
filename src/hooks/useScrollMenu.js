import { useEffect, useState } from "react";

const useScrollMenu = () => {
  const [isVisible, setVisible] = useState(true);
  const [prevScrollYPos, setScrollYPos] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (
        window.scrollY === 0 ||
        document.body.getBoundingClientRect().y > prevScrollYPos
      ) {
        setVisible(true);
      } else {
        setVisible(false);
      }

      setScrollYPos(document.body.getBoundingClientRect().y);
    };

    document.addEventListener("scroll", handleScroll);

    return () => document.removeEventListener("scroll", handleScroll);
  }, [prevScrollYPos]);

  return isVisible;
};

export default useScrollMenu;
