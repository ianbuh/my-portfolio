import { motion } from "framer-motion";

export default function Contact() {
  return (
    <motion.div
      className="max-w-xl mx-auto text-center"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true, amount: 0.6 }}
    >
      <h2 className="text-3xl font-bold mb-4">Contact</h2>
      <p className="text-gray-400 mb-6">Let’s connect and build something great.</p>
      <a
        href="mailto:your@email.com"
        className="px-6 py-3 bg-white text-black rounded-lg font-medium"
      >
        Send Email
      </a>
    </motion.div>
  );
}
