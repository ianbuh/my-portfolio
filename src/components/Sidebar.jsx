import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import lol from "../assets/lol.png";

export default function Sidebar() {
  return (
    <aside className="w-72 bg-gray-900 p-6 flex flex-col items-center rounded-r-2xl shadow-lg">
      <img
        src={lol}
        alt="Profile"
        className="w-32 h-32 rounded-full border-4 border-gray-700 object-cover"
      />
      <h1 className="text-xl font-bold mt-4">Paul Faustino</h1>
      <p className="text-gray-400">Web Developer</p>

      {/* Contact Info */}
      <div className="mt-6 w-full text-sm space-y-3">
        <p className="border-b border-gray-700 pb-2">📧 paul@example.com</p>
        <p className="border-b border-gray-700 pb-2">📞 +63 912-345-6789</p>
        <p className="border-b border-gray-700 pb-2">📍 Cavite City, PH</p>
      </div>

      {/* Socials */}
      <div className="flex gap-4 mt-6">
        <a href="#"><FaGithub size={20} /></a>
        <a href="#"><FaLinkedin size={20} /></a>
        <a href="#"><FaTwitter size={20} /></a>
      </div>
    </aside>
  );
}
