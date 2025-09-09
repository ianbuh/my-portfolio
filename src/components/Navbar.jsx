import { Link } from "react-scroll";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [active, setActive] = useState("hero");

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { threshold: 0.6 }
    );

    sections.forEach((sec) => observer.observe(sec));
    return () => sections.forEach((sec) => observer.unobserve(sec));
  }, []);

  const navItems = ["hero", "about", "projects", "certificates", "contact"];

  return (
    <nav className="fixed top-0 left-0 w-full bg-black bg-opacity-80 backdrop-blur-md z-50 flex justify-center gap-8 py-2 border-b border-gray-800">
      {navItems.map((item) => (
        <Link
          key={item}
          to={item}
          spy={true}
          smooth={true}
          duration={500}
          offset={-70}
          className={`cursor-pointer capitalize ${
            active === item ? "text-white font-bold" : "text-gray-400 hover:text-white"
          }`}
        >
          {item}
        </Link>
      ))}
    </nav>
  );
}
