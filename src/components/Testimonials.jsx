import { motion } from "framer-motion";

export default function Testimonials() {
  const testimonials = [
    {
      name: "Edmark Havoc",
      text: "Paul built an amazing website for us. Very professional and reliable.",
    },
  ];

  return (
    <div>
      <h2 className="text-3xl font-bold mb-6">Testimonials</h2>
      <div className="space-y-6">
        {testimonials.map((t, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.2 }}
            viewport={{ once: true }}
            className="bg-gray-900 border border-gray-700 p-6 rounded-xl shadow-md"
          >
            <p className="text-gray-300">"{t.text}"</p>
            <p className="mt-2 text-sm text-gray-500">- {t.name}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
