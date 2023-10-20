import Header from "../components/header.js";
import About from "../components/about.js";
import { Route, Routes } from "react-router-dom";

export default function App() {
  return (
    <div>
      <NavBar />
      <About />
    </div>
  );
}

function NavBar() {
  return (
    <div>
      <div>
        <Header />
      </div>
    </div>
  );
}
