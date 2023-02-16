import React, { useState } from "react";
import { BrowserRouter, NavLink, Route, Routes } from "react-router-dom";
import FuncHeader from "./components/FuncHeader";
import HomePage from "./pages/HomePage";
import { UserContext, ThemeContext } from "./contexts";
import CONSTANTS from "./constants";
import { useClicker } from "./hooks";
import SignUpForm from "./components/forms/SignUpForm";
const { THEMES } = CONSTANTS;

function App() {
  const [user, setUser] = useState({
    id: 1,
    name: "Brad Pitt",
  });
  const [theme, setTheme] = useState(THEMES.LIGHT);
  const count = useClicker(1000);
  return (
    <ThemeContext.Provider value={[theme, setTheme]}>
      <UserContext.Provider value={[user, setUser]}>
        <BrowserRouter>
          <FuncHeader />
          <h2>Count click at window = {count}</h2>
          <nav>
            <ul>
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li>
                <NavLink to="/signup">signup</NavLink>
              </li>
            </ul>
          </nav>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/signup" element={<SignUpForm />} />
          </Routes>
        </BrowserRouter>
      </UserContext.Provider>
    </ThemeContext.Provider>
  );
}
export default App;
