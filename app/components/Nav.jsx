"use client";

import { useState } from "react";

export default function Nav() {


  return (
    <section
      className="relative h-screen bg-cover bg-center"
      style={{ backgroundImage: "url('/images/porimg.jpg')" }}
    >
      <div className="absolute inset-0 bg-black/60"></div>
      <nav className="relative z-20 flex items-center justify-between px-6 py-4 text-white">
        <h1 className="text-xl font-bold"> CINEMATIC <span className="text-red-500">STUDIO</span></h1>
        <ul className="hidden md:flex gap-10 ml-auto mr-4" >
          <li>Home</li>
          <li>Portfolio</li>
          <li>About Us</li>
          <li>Service</li>
          <li>Contact</li>

        </ul>
      <button className="bg-red-600 px-6 py-3 rounded-lg">Get Started</button>
        <button
          className="md:hidden text-2xl"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>
      </nav>
      {open && (
        <div className="relative z-20 md:hidden bg-black/80 text-white px-6 py-4">
          <ul className="flex flex-col gap-4">
            <li>Home</li>
            <li>About</li>
            <li>Works</li>
            <li>Contact</li>
          </ul>
        </div>
      )}
      <div className="relative z-10 flex h-full flex-col items-center justify-center text-center px-4 text-white">
        <p className="text-red-500 tracking-widest mb-3">
          CINEMATIC STUDIO
        </p>
        <h1 className="text-4xl md:text-6xl font-bold">
          Bringing Stories <br />
          <span className="text-red-500">To Life</span>
        </h1>
        <p className="text-gray-300 max-w-xl mt-6 hover:text-white transition-colors hover:scale-200" >
          We create cinematic visuals and powerful storytelling
          for brands and films.
        </p>
        <div className="mt-8 flex gap-4">
          <button className="bg-red-600 px-6 py-3 rounded-lg hover:bg-green-700 transition-colors hover:scale-105">
            View Work
          </button>
          <button className="border border-white px-6 py-3 rounded-lg hover:bg-white hover:text-black transition-colors">
            Contact
          </button>
        </div>
      </div>
    </section>
  );
}


