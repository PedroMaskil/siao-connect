"use client";

import { useState } from "react";
import MobileMenu from "./MobileMenu";

/**
 * Header principal da aplicação
 * - Logo
 * - Navegação desktop
 * - Menu hambúrguer no mobile
 */
export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="w-full border-b border-orange-200/60 bg-[#fffaf5]">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <h1 className="text-2xl font-semibold tracking-wide text-orange-500">
          Sião Connect
        </h1>

        {/* Menu Desktop */}
        <nav className="hidden md:flex gap-8 text-sm font-medium">
          <a className="hover:text-orange-500 transition">Criar Evento</a>
          <a className="hover:text-orange-500 transition">Meus Eventos</a>
          <a className="hover:text-orange-500 transition">Meus Ingressos</a>
          <a className="px-4 py-2 rounded-full border border-orange-300 text-orange-500 hover:bg-orange-50 transition">
            Acesse sua conta
          </a>
        </nav>

        {/* Botão Hambúrguer */}
        <button
          onClick={() => setOpen(true)}
          className="md:hidden text-orange-500 text-2xl"
          aria-label="Abrir menu"
        >
          ☰
        </button>
      </div>

      {/* Menu Mobile */}
      <MobileMenu open={open} onClose={() => setOpen(false)} />
    </header>
  );
}
