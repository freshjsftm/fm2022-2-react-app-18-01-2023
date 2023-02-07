import React, { Component } from "react";
import { WbSunny, DarkMode } from "@mui/icons-material";
import cx from "classnames";
import { UserContext, ThemeContext } from "../../contexts";
import { WithTheme } from "../HOC";
import styles from "./Header.module.scss";
import CONSTANTS from "../../constants";
const { THEMES } = CONSTANTS;

class Header extends Component {
  render() {
    const { theme, setTheme } = this.props;
    const classNames = cx(styles.header, {
      [styles.light]: theme === THEMES.LIGHT,
      [styles.dark]: theme === THEMES.DARK,
    });
    return (
      <UserContext.Consumer>
        {(user) => (
          <header className={classNames}>
            <strong>hi,{user.firstName}</strong>
            <span
              className={styles.theme}
              onClick={() => {
                const newTheme =
                  theme === THEMES.LIGHT ? THEMES.DARK : THEMES.LIGHT;
                setTheme(newTheme);
              }}
            >
              {theme === THEMES.LIGHT ? <DarkMode /> : <WbSunny />}
            </span>
          </header>
        )}
      </UserContext.Consumer>
    );
  }
}
export default WithTheme(Header);

// const HeaderWithContext = () => {
//   return (
//     <ThemeContext.Consumer>
//       {([theme, setTheme]) => <Header theme={theme} setTheme={setTheme} />}
//     </ThemeContext.Consumer>
//   );
// };
// const WithTheme = (InnerComponent) => (props) => {
//   return (
//     <ThemeContext.Consumer>
//       {([theme, setTheme]) => (
//         <InnerComponent theme={theme} setTheme={setTheme} />
//       )}
//     </ThemeContext.Consumer>
//   );
// };
//const HeaderWithContext = WithTheme(Header);

