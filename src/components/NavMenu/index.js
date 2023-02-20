import React, { useContext, useRef, useEffect } from "react";
import cx from "classnames";
import { NavLink } from "react-router-dom";
import { CancelPresentation } from "@mui/icons-material";
import styles from "./NavMenu.module.scss";
import { MenuContext } from "../../contexts";

const NavMenu = (props) => {
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
  const keyCloseMenu = (event) => {
    if (event.keyCode === 13) {
      closeMenu();
    }
  };
  return (
    <nav className={classNames} ref={navMenuRef}>
      <CancelPresentation
        className={styles.closeBtn}
        onClick={closeMenu}
        tabIndex="0"
        onKeyDown={keyCloseMenu}
      />
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
        <li>
          <NavLink to="/todo-1">todo reducer</NavLink>
        </li>
        <li>
          <NavLink to="/todo-2">todo useState</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default NavMenu;
