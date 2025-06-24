// App.jsx
import React from "react";
import Hero from "./sections/Hero.jsx";
import ShowcaseSection from "./sections/ShowcaseSection.jsx";
import NavBar from "./components/Navbar.jsx";
import LogoShowcase from "./sections/LogoShowcase.jsx";
import FeatureCards from "./sections/FeatureCards.jsx";
import Experience from "./sections/Experience.jsx";

function App() {
  return (
    <div>
      <NavBar />
      <Hero />
      <ShowcaseSection />
<LogoShowcase/> 
   <FeatureCards/> 
   <Experience/> 
    </div>
  );
}

export default App;
