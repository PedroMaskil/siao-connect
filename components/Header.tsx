"use client";

import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="w-full bg-orange-50 border-b border-orange-200">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">

        {/* Logo */}
        <h1 className="text-xl font-bold text-orange-600">
          Sião Connect
        </h1>

        {/* Menu Desktop */}
        <nav className="hidden md:flex gap-6 text-gray-700 font-medium">
          <a href="#">Criar Evento</a>
          <a href="#">Meus Eventos</a>
          <a href="#">Meus Ingressos</a>
          <a href="#">Acesse sua conta</a>
        </nav>

        {/* Botão Hambúrguer (Mobile) */}
        <button
          className="md:hidden text-orange-600 text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Abrir menu"
        >
          ☰
        </button>
      </div>

      {/* Menu Mobile */}
      {menuOpen && (
        <div className="md:hidden bg-orange-100 border-t border-orange-200">
          <nav className="flex flex-col gap-4 p-4 text-gray-700 font-medium">
            <a href="#" onClick={() => setMenuOpen(false)}>Criar Evento</a>
            <a href="#" onClick={() => setMenuOpen(false)}>Meus Eventos</a>
            <a href="#" onClick={() => setMenuOpen(false)}>Meus Ingressos</a>
            <a href="#" onClick={() => setMenuOpen(false)}>Acesse sua conta</a>
          </nav>
        </div>
      )}
    </header>
  );
}
