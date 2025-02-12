import React from "react";
import Navbar from "./components/navbar";
import Landing from "./components/landing";
import About from "./components/about";
import Projects from "./components/Projects";
import Contact from "./components/contact";
import "./styles.css";

const App = () => {
  return (
    <div className="app-container">
      <Navbar />
      <main>
        <Landing />
        <About />
        <Projects />
        <Contact />
      </main>
    </div>
  );
};

export default App;
