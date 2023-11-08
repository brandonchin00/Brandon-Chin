import { Navbar } from "./components/NavBar";
import About from "./components/about.js";
import Home from "./pages/aboutme.js";
export default function App() {
  return (
    <div className="App">
      <Navbar />
      <About />
      <Home />
    </div>
  );
}
