import React from "react";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Scene from "./components/Scene";

export default function App() {
  return (
    <div className="min-h-screen relative">
      {/* 3D background that sits behind everything */}
      <div className="canvas-wrapper">
        <Scene />
      </div>

      {/* UI Overlay */}
      <div className="overlay relative min-h-screen">
        <header className="w-full flex items-center justify-between p-6 md:px-12">
          <div className="text-xl font-semibold">Paul Faustino</div>
          <nav className="space-x-4 hidden md:flex">
            <a href="#about" className="hover:underline">About</a>
            <a href="#projects" className="hover:underline">Projects</a>
            <a href="#contact" className="hover:underline">Contact</a>
          </nav>

          {/* mobile menu icon */}
          <div className="md:hidden">
            <button className="p-2 glass rounded">Menu</button>
          </div>
        </header>

        <main className="px-6 md:px-12 py-12">
          <Hero />
          <About />
          <Projects />
          <Contact />
        </main>

        <footer className="text-center py-8 text-sm opacity-70">
          © {new Date().getFullYear()} Paul Faustino — built with React + Three.js + Tailwind
        </footer>
      </div>
    </div>
  );
}
