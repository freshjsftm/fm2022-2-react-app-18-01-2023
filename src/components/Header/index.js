import React, { Component } from "react";
import {WbSunny, DarkMode} from '@mui/icons-material';
import cx from "classnames";
import { UserContext, ThemeContext } from "../../contexts";
import styles from "./Header.module.scss";
import CONSTANTS from "../../constants";
const { THEMES } = CONSTANTS;

class Header extends Component {
  render() {
    return (
      <ThemeContext.Consumer>
        {([theme, setTheme]) => {
          const classNames = cx(styles.header,
            {
            [styles.light]: theme === THEMES.LIGHT,
            [styles.dark]: theme === THEMES.DARK,
          });
          return (
            <UserContext.Consumer>
              {(user) => (
                <header className={classNames}>
                  <strong>hi,{user.firstName}</strong>
                  <span className={styles.theme}
                    onClick={() => {
                      const newTheme = theme === THEMES.LIGHT ? THEMES.DARK : THEMES.LIGHT;
                      setTheme(newTheme);
                    }}
                  >
                    {theme === THEMES.LIGHT ? <DarkMode /> : <WbSunny />}
                  </span>
                </header>
              )}
            </UserContext.Consumer>
          );
        }}
      </ThemeContext.Consumer>
    );
  }
}

export default Header;
