import React, { useRef, useState } from "react";

import Header from "./Header";
import Logo from "./Header/Logo";
import Footer from "./Footer";
import Nav from "./Header/Nav";
import ButtonBurger from "./Header/BurgerButton";

import useScrollMenu from "../../hooks/useScrollMenu";

import styles from "./styles.module.css";

const LayoutComponent = ({ children }) => {
  const element = useRef(null);
  const [isMenuOpen, setMenu] = useState(false);
  const scrollUp = useScrollMenu();

  const isVisible = isMenuOpen ? true : scrollUp;

  return (
    <main className={isMenuOpen ? styles["overflowY--hidden"] : ""}>
      <div className={styles.background} />
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
        <section className={styles.section}>{children}</section>
        <div className={styles["footer-container"]}>
          <Footer />
        </div>
      </div>
    </main>
  );
};

const Layout = React.memo(LayoutComponent);

export default Layout;
