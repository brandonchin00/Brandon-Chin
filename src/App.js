import { Route, Routes } from "react-router-dom";
import Home from "./pages/home.js";
import Intro from "./pages/about.js";

export default function App() {
  return (
    // <Routes>
    //   <Route path="/" element={<Home />} />;
    //   <Route path="/" element={<About />} />;
    //   {/* so this route thing is for other pages not for when you scroll down.  */}
    // </Routes>
    <div>
      <Home />
      <Intro />
    </div>
  );
}
