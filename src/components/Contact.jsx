import React from "react";

export default function Contact() {
  return (
    <section id="contact" className="mt-12 max-w-3xl mx-auto p-6 glass rounded-lg">
      <h2 className="text-2xl font-semibold mb-3">Contact</h2>
      <p className="mb-4">Want to collaborate or say hi? Drop a message.</p>

      <form className="grid grid-cols-1 gap-3">
        <input className="p-3 rounded bg-transparent border border-gray-700" placeholder="Your name" />
        <input className="p-3 rounded bg-transparent border border-gray-700" placeholder="Email" />
        <textarea className="p-3 rounded bg-transparent border border-gray-700" placeholder="Message" rows="5" />
        <button className="py-2 px-4 rounded bg-blue-600">Send</button>
      </form>
    </section>
  );
}
