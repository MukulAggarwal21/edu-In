import React from 'react'
import { Button } from "./ui/button";

export default function footer() {
  return (
     <footer className="w-full bg-black text-white py-2 mt-8">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between px-4">
          <div className="text-left">
            <h2 className="text-4xl font-bold">
              Study<span className="text-gray-400">table</span>
            </h2>
            <span className="text-gray-400 text-xs">
              © Copyright 2025 Studytable
            </span>
          </div>


          <div className="text-center mt-4 md:mt-0">
            <Button
              variant="outline"
              className="border-blue-500 text-blue-500 bg-white px-5 py-1 text-sm"
            >
              ★ Notice Board
            </Button>
          </div>

          {/* Right Side - Socials & Blogs */}
          <div className="flex flex-col md:flex-row gap-8 -ml-20 md:ml-0 mt-4 md:mt-0">
            <div>
              <h3 className="text-lg font-medium mb-2">Socials</h3>
              <ul className="list-none p-0">
                <li className="mb-2 flex items-center">
                  <span className="mr-2">📷</span> Instagram
                </li>
                <li className="mb-2 flex items-center">
                  <span className="mr-2">📱</span> WhatsApp
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-medium mb-2">Blogs</h3>
              <ul className="list-none p-0">
                <li className="mb-2">How we plan learning sessions?</li>
                <li className="mb-2">How we plan assessment sessions?</li>
                <li className="mb-2">How we manage student life?</li>
                <li className="mb-2">The effective student</li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
  )
}
