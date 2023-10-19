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
      <li>
        <a href="/">About</a>
        <a href="/">Education</a>
        <a href="/">Experience</a>
        <a href="/">Portofolio</a>
        <a href="/">Contact</a>
      </li>
    </div>
  );
}

function About() {
  return (
    <div>
      <h1>About Me</h1>
    </div>
  );
}
