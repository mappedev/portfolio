import React, { useRef } from "react";

import Header from "./Header";
import Logo from "./Header/Logo";
import Footer from "./Footer";
import Nav from "./Header/Nav";
import ButtonBurger from "./Header/BurgerButton";

import useScrollMenu from "../../hooks/useScrollMenu";
import useClickInside from "../../hooks/useClickInside";
import useMenuOpen from "../../hooks/useMenuOpen";

import styles from "./styles.module.css";

const Layout = ({ children }) => {
  const element = useRef(null);
  const isVisible = useScrollMenu();
  const clickInsideMenu = useClickInside(element);
  const [isMenuOpen, setMenu] = useMenuOpen(clickInsideMenu);

  return (
    <main className={styles.Layout}>
      <Header isVisible={isVisible}>
        <Logo />
        <div className={styles.menu} ref={element}>
          <Nav isActive={isMenuOpen} onClick={() => setMenu(false)} />
          <ButtonBurger
            isActive={isMenuOpen}
            onClick={() => setMenu(!isMenuOpen)}
          />
        </div>
      </Header>
      <div className={styles.wrapper}>
        <section>{children}</section>
        <Footer />
        <div className={styles.prueba}></div>
      </div>
    </main>
  );
};

export default Layout;
