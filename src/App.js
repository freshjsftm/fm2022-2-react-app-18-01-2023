import React, { useState } from "react";
import { BrowserRouter, NavLink, Route, Routes } from "react-router-dom";
import { UserContext, ThemeContext } from "./contexts";
import FuncHeader from "./components/FuncHeader";
import SignUpForm from "./components/forms/SignUpForm";
import Chat from "./components/Chat";
import HomePage from "./pages/HomePage";
import { useClicker } from "./hooks";
import CONSTANTS from "./constants";
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
              <li>
                <NavLink to="/chat">chat</NavLink>
              </li>
            </ul>
          </nav>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/signup" element={<SignUpForm />} />
            <Route path="/chat" element={<Chat />} />
          </Routes>
        </BrowserRouter>
      </UserContext.Provider>
    </ThemeContext.Provider>
  );
}
export default App;
