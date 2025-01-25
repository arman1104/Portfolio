// // import "./App.css";
// import About from "./components/about/About";
// import Hero from "./components/hero/Hero";
// import Navbar from "./components/navbar/Navbar";
// import Skills from "./components/skills/Skills";
// import Projects from "./components/projects/Projects";
// import Contact from "./components/contact/Contact";
// import Footer from "./components/footer/Footer";

// function App() {
//   return (
//     <>
//       <Navbar />
//       <Hero />
//       <About />
//       <Skills />
//       <Projects />
//       <Contact />
//       <Footer />
//     </>
//   );
// }

// export default App;

import About from "./components/about/About";
import Hero from "./components/hero/Hero";
import Navbar from "./components/navbar/Navbar";
import Skills from "./components/skills/Skills";
import Projects from "./components/projects/Projects";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import { Element } from "react-scroll";

function App() {
  return (
    <>
      <Navbar />
      <Element name="home">
        <Hero />
      </Element>
      <Element name="about">
        <About />
      </Element>
      <Element name="skills">
        <Skills />
      </Element>
      <Element name="projects">
        <Projects />
      </Element>
      <Element name="contact">
        <Contact />
      </Element>
      <Footer />
    </>
  );
}

export default App;
