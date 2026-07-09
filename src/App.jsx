import Navbar from "./components/Navbar/Navbar.jsx";
import Hero from "./components/Hero/Hero.jsx";
import About from "./components/About/About";
import Experience from "./components/Experience/Experience";
import FeaturedWork from "./components/FeaturedWork/FeaturedWork";

import "./styles/variables.css";
import "./styles/globals.css";


function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <FeaturedWork />
      <Experience />
    </>
  );
}

export default App;