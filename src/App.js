import React from "react";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import WindowSize from './components/WindowSize';
import SignInForm from './components/forms/SignInForm';
import StopWatch from './components/StopWatch';
import Error404 from './components/Error404';

function App(props) {
  return (
    <>
      <BrowserRouter>
        <nav>
          <ul>
            <li><NavLink to="/">HOME</NavLink></li>
            <li><NavLink to="/sign-in">sign-in</NavLink></li>
            <li><NavLink to="/stop-watch">StopWatch</NavLink></li>
            <li><NavLink to="/dash-board">Dashboard</NavLink>
              <ul>
                <li><NavLink to="/dash-board/messages">messages</NavLink></li>
                <li><NavLink to="/dash-board/tasks">tasks</NavLink></li>
                <li><NavLink to="/dash-board/users">users</NavLink></li>
              </ul>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<WindowSize />} />
          <Route path="/sign-in" element={<SignInForm />} />
          <Route path="/stop-watch" element={<StopWatch />} />
          <Route path='/dash-board/' element={<Dashboard />}>
            <Route path="messages" element={<h2>messages</h2>} />
            <Route path="tasks" element={<h2>tasks</h2>} />
            <Route path="users" element={<h2>users</h2>} />
          </Route>

          <Route path="*" element={<Error404 />} />
        </Routes>

        <footer>
          <nav>
            <ul>
              <li><NavLink to="/">HOME</NavLink></li>
              <li><NavLink to="/sign-in">sign-in</NavLink></li>
              <li><NavLink to="/stop-watch">StopWatch</NavLink></li>
              <li><NavLink to="/dash-board">Dashboard</NavLink>
                <ul>
                  <li><NavLink to="/dash-board/messages">messages</NavLink></li>
                  <li><NavLink to="/dash-board/tasks">tasks</NavLink></li>
                  <li><NavLink to="/dash-board/users">users</NavLink></li>
                </ul>
              </li>
            </ul>
          </nav>
          <p>&copy; 2023</p>
        </footer>
      </BrowserRouter>
    </>
  );
}

export default App;
