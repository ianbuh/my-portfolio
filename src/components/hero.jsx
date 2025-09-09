import { motion } from "framer-motion";

export default function Hero() {
  return (
    <motion.div
      className="text-center"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <h1 className="text-5xl font-bold mb-4">Hi, I’m Paul Faustino</h1>
      <p className="text-gray-400 text-lg mb-8">
        Web Developer | Tech Enthusiast | Data Analyst
      </p>
      <motion.a
        href="#projects"
        whileHover={{ scale: 1.1 }}
        className="px-6 py-3 bg-white text-black rounded-lg font-medium"
      >
        View My Work
      </motion.a>
    </motion.div>
  );
}
