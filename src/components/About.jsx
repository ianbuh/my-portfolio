import { motion } from "framer-motion";

export default function About() {
  return (
    <motion.div
      className="max-w-3xl mx-auto text-center"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true, amount: 0.6 }}
    >
      <h2 className="text-3xl font-bold mb-4">About Me</h2>
      <p className="text-gray-400 leading-relaxed">
       Recent graduate passionate about web development,
automation, and data analytics. Skilled in web technologies (PHP,
Vue.js, C#) and automation tools (Power Automate, PowerApps).
Currently expanding expertise in Power BI and SQL through selfstudy, with a focus on data visualization, reporting, and database
management. Eager to contribute technical knowledge and
problem-solving skills to innovative projects.

      </p>
    </motion.div>
  );
}
