import React, { Component } from "react";
import { WbSunny, DarkMode } from "@mui/icons-material";
import cx from "classnames";
import { WithTheme, WithUser } from "../HOC";
import styles from "./Header.module.scss";
import CONSTANTS from "../../constants";
const { THEMES } = CONSTANTS;

class Header extends Component {
  handlerTheme = () => {
    const { theme, setTheme} = this.props;
    const newTheme = theme === THEMES.LIGHT ? THEMES.DARK : THEMES.LIGHT;
    setTheme(newTheme);
  };
  render() {
    const { theme, user } = this.props;
    const classNames = cx(styles.header, {
      [styles.light]: theme === THEMES.LIGHT,
      [styles.dark]: theme === THEMES.DARK,
    });
    return (
      <header className={classNames}>
        <strong>hi,{user.firstName}</strong>
        <span className={styles.theme} onClick={this.handlerTheme}>
          {theme === THEMES.LIGHT ? <DarkMode /> : <WbSunny />}
        </span>
      </header>
    );
  }
}
export default WithUser(WithTheme(Header));
