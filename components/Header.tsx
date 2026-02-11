"use client";

import { useState } from "react";
import { Menu } from "lucide-react";
import MobileMenu from "@/components/MobileMenu";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <header className="flex items-center justify-between px-6 py-4">
        <span className="text-xl font-bold text-orange-600">
          Sião Connect
        </span>

        {/* Desktop menu */}
        <nav className="hidden md:flex gap-6">
          <a href="#">Criar Evento</a>
          <a href="#">Meus Eventos</a>
          <a href="#">Meus Ingressos</a>
          <a href="#" className="font-semibold text-orange-600">
            Acesse sua conta
          </a>
        </nav>

        {/* Mobile botão */}
        <button
          className="md:hidden"
          onClick={() => setMenuOpen(true)}
          aria-label="Abrir menu"
        >
          <Menu size={28} />
        </button>
      </header>

      {/* Menu mobile overlay */}
      <MobileMenu
        isOpen={menuOpen}
        onClose={() => setMenuOpen(false)}
      />
    </>
  );
}
