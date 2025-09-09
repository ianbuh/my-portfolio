import { motion } from "framer-motion";

export default function Certificates() {
  const certs = [
    { name: "Power BI Fundamentals", issuer: "Microsoft" },
    { name: "SQL for Data Analysis", issuer: "Coursera" },
  ];

  return (
    <motion.div
      className="max-w-4xl mx-auto text-center"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true, amount: 0.4 }}
    >
      <h2 className="text-3xl font-bold mb-8">Certificates</h2>
      <div className="grid md:grid-cols-2 gap-6">
        {certs.map((cert, i) => (
          <div
            key={i}
            className="bg-gray-900 border border-gray-700 p-6 rounded-lg"
          >
            <h3 className="font-semibold text-lg">{cert.name}</h3>
            <p className="text-gray-400">{cert.issuer}</p>
          </div>
        ))}
      </div>
    </motion.div>
  );
}
