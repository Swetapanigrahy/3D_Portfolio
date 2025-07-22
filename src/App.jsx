// App.jsx
import React from "react";
import Hero from "./sections/Hero.jsx";
import ShowcaseSection from "./sections/ShowcaseSection.jsx";
import NavBar from "./components/Navbar.jsx";
import Experience from "./sections/Experience.jsx";
import Skills from "./components/Models/Skills.jsx";
import Contact from "./sections/Contact.jsx";

function App() {
  return (
    <div className="relative bg-black">
      <NavBar />
      <main>
        <Hero />
        <div className="relative z-10">
          <ShowcaseSection />
          <Skills />
          <Experience />
          <Contact />
        </div>
      </main>
    </div>
  );
}

export default App;
