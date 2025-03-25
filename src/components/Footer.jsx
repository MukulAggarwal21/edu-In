import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-start">
          <div className="text-gray-400">
            <h2 className="text-xl font-semibold text-white">
              Study<span className="text-gray-400">table</span>
            </h2>
            <p>© Copyright 2024 Studytable</p>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">About</a></li>
              <li><a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">Features</a></li>
              <li><a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Blogs</h3>
            <ul className="space-y-2">
              <li className="text-gray-400">How we plan learning session?</li>
              <li className="text-gray-400">How we plan assessment session?</li>
              <li className="text-gray-400">How we manage student life?</li>
              <li className="text-gray-400">The effective student</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Socials</h3>
            <ul className="space-y-2">
              <li className="text-gray-400">📸 Instagram</li>
              <li className="text-gray-400">💬 WhatsApp</li>
            </ul>
            <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-lg shadow-md hover:bg-blue-700">
              📌 Notice Board
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
