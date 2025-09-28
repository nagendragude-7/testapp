import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./Home";
import SearchBox from "./SearchBox";
import About from "./About";
import Dashboard from "./Dashboard";
import "./App.css";
import User from "./User";
import { FocusInput } from "./FocusInput";
import ProviderContext from "./contextAPI/ProviderContext";

function App() {
  return (
    <BrowserRouter>
      <nav>
  <Link to="/">Home</Link> |{" "}
  <Link to="/search">Search</Link> |{" "}
  <Link to="/about">About</Link> |{" "}
  <Link to="/user/99">User 99</Link>|{" "}
  <Link to="/focus">useRef</Link>|{" "}
  <Link to="/context">context</Link>
</nav>

<Routes>
  <Route path="/" element={<Home />} />
  <Route path="/search" element={<SearchBox />} />

  {/* Nested under About */}
  <Route path="/about" element={<About />}>
    <Route index element={<Dashboard />} />
    <Route path="dashboard" element={<Dashboard />} />
  </Route>
<Route path="/context" element={<ProviderContext/>}/>
  {/* ✅ Dynamic Route */}
  <Route path="/user/:id" element={<User />} />
  <Route path="focus" element={<FocusInput/>} />
  <Route path="*" element={<h2>404 Not Found</h2>} />
  
</Routes>

    </BrowserRouter>
  );
}

export default App;
