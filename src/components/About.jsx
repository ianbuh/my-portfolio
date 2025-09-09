import React from "react";

export default function About() {
  return (
    <section id="about" className="mt-16 max-w-4xl mx-auto p-6 glass rounded-lg">
      <h2 className="text-2xl font-semibold mb-3">About</h2>
      <p>
        I build responsive web apps and interactive experiences. I’ve worked with React, Unity, Firebase and I enjoy blending 2D UI with subtle 3D visual effects.
      </p>

      <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="p-4">
          <h3 className="font-semibold">Skills</h3>
          <ul className="mt-2 space-y-1 text-sm">
            <li>React, JS, Tailwind</li>
            <li>Three.js / @react-three/fiber</li>
            <li>Firebase / REST APIs</li>
          </ul>
        </div>

        <div className="p-4">
          <h3 className="font-semibold">Experience</h3>
          <p className="mt-2 text-sm">Building small web apps and prototypes focused on clarity and performance.</p>
        </div>

        <div className="p-4">
          <h3 className="font-semibold">Learning</h3>
          <p className="mt-2 text-sm">Constantly exploring 3D workflows, performance tuning and accessible UI patterns.</p>
        </div>
      </div>
    </section>
  );
}
