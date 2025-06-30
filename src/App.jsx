import React from "react";
import "./index.css";
import Navbar from "./components/NavBar.jsx";
import Experience from "./components/Experience.jsx";
import Header from "./components/Header.jsx";
import About from "./components/About.jsx";
import Skills from "./components/Skills.jsx";
import Projects from "./components/Projects.jsx";
import Resume from "./components/Resume.jsx";
import Contact from "./components/Contacts.jsx";
import Footer from "./components/Footers.jsx";

function App() {
  return (
    <div className="bg-[#f9f9f9] text-[#333] font-sans leading-relaxed min-h-screen">

      <Header />
      <Navbar />

      <main className="max-w-3xl mx-auto px-5 py-10 space-y-10">

        <About />
        <Experience />
        <Skills />
        <Projects />
        <Resume />
        <Contact />
        
      </main>

      <Footer />

    </div>
  );
}

export default App;