import Navbar from "./components/Navbar/Navbar.jsx";
import Hero from "./components/Hero/Hero.jsx";
import About from "./components/About/About";
import Experience from "./components/Experience/Experience";
import FeaturedWork from "./components/FeaturedWork/FeaturedWork";
import EngineeringToolkit from "./components/EngineeringToolkit/EngineeringToolkit";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";

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
      <EngineeringToolkit />
      <Contact />
      <Footer />
    </>
  );
}

export default App;