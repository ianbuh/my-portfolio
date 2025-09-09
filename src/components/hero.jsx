import React from "react";

export default function Hero() {
  return (
    <section id="home" className="min-h-[60vh] flex flex-col items-center justify-center text-center text-white">
      <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">Hi — I'm Paul</h1>
      <p className="mt-4 max-w-2xl">A frontend dev who likes building interactive UI and small 3D experiences using React + Three.js.</p>
      <div className="mt-6 flex gap-4">
        <a href="#projects" className="px-5 py-2 rounded glass">View Projects</a>
        <a href="#contact" className="px-5 py-2 rounded bg-blue-600">Contact</a>
      </div>
    </section>
  );
}
