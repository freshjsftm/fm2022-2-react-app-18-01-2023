import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import UserProfile from "./components/UserProfile";
import { UserContext } from "./contexts";

function App() {
  const [user, setUser] = useState({
    id: 1,
    name: "Brad Pitt",
  });
  return (
    <UserContext.Provider value={[user, setUser]}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<UserProfile />} />
        </Routes>
      </BrowserRouter>
    </UserContext.Provider>
  );
}
export default App;
