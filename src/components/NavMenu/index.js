import React, { useContext, useRef, useEffect } from "react";
import cx from "classnames";
import { NavLink } from "react-router-dom";
import { CancelPresentation } from "@mui/icons-material";
import styles from "./NavMenu.module.scss";
import { MenuContext } from "../../contexts";

const NavMenu = () => {
  const [state, closeMenu] = useContext(MenuContext);
  const classNames = cx(styles.container, {
    [styles.open]: state.isMenuOpen,
  });
  const navMenuRef = useRef(null);
  useEffect(() => {
    const handlerClick = ({ target }) => {
      if (navMenuRef.current.contains(target) === false && state.isMenuOpen) {
        closeMenu();
      }
    };
    window.addEventListener("click", handlerClick);
    return () => window.removeEventListener("click", handlerClick);
    // eslint-disable-next-line
  }, [state.isMenuOpen]);
  return (
    <nav className={classNames} ref={navMenuRef}>
      <CancelPresentation className={styles.closeBtn} onClick={closeMenu} />
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/signup">signup</NavLink>
        </li>
        <li>
          <NavLink to="/chat">chat</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default NavMenu;
