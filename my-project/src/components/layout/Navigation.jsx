import React from "react";

export default function Navigation() {
  return (
    <nav aria-label="Main Navigation">
      <ul className="hidden md:flex items-center gap-6 text-sm">
        <li><a href="#hero" className="hover:underline">Home</a></li>
        <li><a href="#products" className="hover:underline">Products</a></li>
        <li><a href="#features" className="hover:underline">Features</a></li>
        <li><a href="#about" className="hover:underline">About</a></li>
        <li><a href="#contact" className="hover:underline">Contact</a></li>
      </ul>
      {/* mobile menu trigger (simple) */}
      <button
        className="md:hidden ml-4 p-2 rounded-md"
        aria-label="Open menu"
        onClick={() => {
          const el = document.getElementById("products");
          if (el) el.scrollIntoView({ behavior: "smooth" });
        }}
      >
        ☰
      </button>
    </nav>
  );
}
