import React from "react";

const sampleProjects = [
  {
    title: "Interactive Portfolio",
    desc: "React + Three.js background and responsive content.",
    link: "#"
  },
  {
    title: "Data Dashboard",
    desc: "Power BI inspired layout (demo).",
    link: "#"
  },
  {
    title: "Unity Mini Game",
    desc: "Mobile-first small puzzle game.",
    link: "#"
  }
];

export default function Projects() {
  return (
    <section id="projects" className="mt-12 max-w-5xl mx-auto">
      <h2 className="text-2xl font-semibold mb-6">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {sampleProjects.map((p, i) => (
          <article key={i} className="p-4 glass rounded-lg hover:scale-[1.01] transition-transform">
            <h3 className="font-semibold">{p.title}</h3>
            <p className="mt-2 text-sm">{p.desc}</p>
            <a className="mt-4 inline-block text-sm underline" href={p.link}>View</a>
          </article>
        ))}
      </div>
    </section>
  );
}
