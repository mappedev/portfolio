import { useEffect, useState } from "react";

const useMenuOpen = (clickOutsideMenu) => {
  const [isMenuOpen, setMenu] = useState(false);

  useEffect(() => {
    if (!clickOutsideMenu) {
      setMenu(clickOutsideMenu);
    }
  }, [clickOutsideMenu]);

  return [isMenuOpen, setMenu];
};

export default useMenuOpen;
