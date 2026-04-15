import React from "react";
import Hero from "./sections/Hero.jsx";
import ShowcaseSection from "./sections/ShowcaseSection.jsx";
import NavBar from "./components/Navbar.jsx";
import Experience from "./sections/Experience.jsx";
import Skills from "./components/Models/Skills.jsx";
import Contact from "./sections/Contact.jsx";

function App() {
  return (
    <div className="bg-black">
      <NavBar />
      <main>
        <Hero />
        <ShowcaseSection />
        <Skills />
        <Experience />
        <Contact />
      </main>
    </div>
  );
}

export default App;
