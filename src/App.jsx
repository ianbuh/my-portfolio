import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Hero from "./components/hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Certificates from "./components/Certificates";
import Contact from "./components/Contact";
import Background from "./components/Background";

export default function App() {
  return (
    <div className="min-h-screen flex bg-black text-white relative">
      {/* Moving Background */}
      <Background />

      {/* Sidebar (desktop only) */}
      <Sidebar />

      {/* Main Content */}
      <main className="flex-1 min-h-screen p-8 overflow-y-auto">
        <Navbar />

        <section id="hero" className="min-h-screen flex items-center justify-center">
          <Hero />
        </section>

        <section id="about" className="mt-32">
          <About />
        </section>

        <section id="projects" className="mt-32">
          <Projects />
        </section>

        <section id="certificates" className="mt-32">
          <Certificates />
        </section>

        <section id="contact" className="mt-32">
          <Contact />
        </section>
      </main>
    </div>
  );
}
