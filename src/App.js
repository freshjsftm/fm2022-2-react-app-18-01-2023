import React from "react";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import CounterPage from "./pages/CounterPage";
import LoaderPage from "./pages/LoaderPage";
import WindowSize from "./components/WindowSize";
import SignInForm from "./components/forms/SignInForm";
import StopWatch from "./components/StopWatch";
import Error404 from "./components/Error404";

function App(props) {
  return (
    <>
      <BrowserRouter>
        <nav>
          <ul>
            <li>
              <NavLink to="/">HOME</NavLink>
            </li>
            <li>
              <NavLink to="/sign-in">sign-in</NavLink>
            </li>
            <li>
              <NavLink to="/stop-watch">StopWatch</NavLink>
            </li>
            <li>
              <NavLink to="/dash-board">Dashboard</NavLink>
              <ul>
                <li>
                  <NavLink to="/dash-board/counter">counter</NavLink>
                </li>
                <li>
                  <NavLink to="/dash-board/loader">loader</NavLink>
                </li>
              </ul>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<WindowSize />} />
          <Route path="/sign-in" element={<SignInForm />} />
          <Route path="/stop-watch" element={<StopWatch />} />
          <Route path="/dash-board/" element={<Dashboard />}>
            <Route path="counter" element={<CounterPage />} />
            <Route path="loader/" element={<LoaderPage />} />
          </Route>
          <Route path="*" element={<Error404 />} />
        </Routes>
        <footer>
          <p>&copy; 2023</p>
        </footer>
      </BrowserRouter>
    </>
  );
}

export default App;
