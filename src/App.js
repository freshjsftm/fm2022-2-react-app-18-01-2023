import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import FuncHeader from "./components/FuncHeader";
import HomePage from "./pages/HomePage";
import { UserContext, ThemeContext } from "./contexts";
import CONSTANTS from "./constants";
import { useClicker } from "./hooks";
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
          <Routes>
            <Route path="/" element={<HomePage />} />
          </Routes>
        </BrowserRouter>
      </UserContext.Provider>
    </ThemeContext.Provider>
  );
}
export default App;
