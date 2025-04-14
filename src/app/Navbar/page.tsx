// components/Navbar.tsx
"use client";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="w-full p-4 bg-white shadow-md fixed top-0 left-0 z-50">
      <ul className="flex justify-center gap-6 text-sm font-semibold">
        <li><Link href="#hero">Accueil</Link></li>
        <li><Link href="#skills">Compétences</Link></li>
        <li><Link href="#projects">Projets</Link></li>
        <li><Link href="#contact">Contact</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
