import { motion } from "framer-motion";

export default function Services() {
  const items = [
    { title: "Web Design", desc: "Modern and professional designs." },
    { title: "Web Development", desc: "Clean, scalable code." },
    { title: "Mobile Apps", desc: "Cross-platform iOS/Android apps." },
    { title: "UI/UX", desc: "User-friendly, intuitive interfaces." },
  ];

  return (
    <div>
      <h2 className="text-3xl font-bold mb-6">What I'm Doing</h2>
      <div className="grid md:grid-cols-2 gap-6">
        {items.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.2 }}
            viewport={{ once: true }}
            className="bg-gray-900 border border-gray-700 p-6 rounded-xl shadow-md hover:shadow-xl transition"
          >
            <h3 className="font-semibold text-lg">{item.title}</h3>
            <p className="text-gray-400 mt-2">{item.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
