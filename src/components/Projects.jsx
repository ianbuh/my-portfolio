import { motion } from "framer-motion";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

const item = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0 },
};

export default function Projects() {
  const projects = [
    { title: "BasteKonek", desc: "Multiplayer game built with Unity + Firebase" },
    { title: "Asset Monitoring", desc: "System for real-time asset tracking" },
    { title: "Loan Management", desc: "PDF automation with PowerAutomate" },
  ];

  return (
    <motion.div
      className="max-w-5xl mx-auto text-center"
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.4 }}
    >
      <h2 className="text-3xl font-bold mb-8">Projects</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {projects.map((proj, i) => (
          <motion.div
            key={i}
            variants={item}
            className="bg-gray-900 border border-gray-700 p-6 rounded-xl hover:shadow-xl transition"
          >
            <h3 className="font-semibold text-lg">{proj.title}</h3>
            <p className="text-gray-400 mt-2">{proj.desc}</p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
