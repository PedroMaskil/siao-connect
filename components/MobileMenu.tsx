"use client";

import { X } from "lucide-react";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

/**
 * Menu mobile em formato de overlay (modal)
 * Abre em tela cheia e bloqueia a tela de fundo
 */
export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm">
      <div className="absolute top-0 right-0 h-full w-4/5 max-w-sm bg-white shadow-xl p-6 animate-slide-in">
        
        {/* Botão fechar */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-600"
          aria-label="Fechar menu"
        >
          <X size={28} />
        </button>

        {/* Links */}
        <nav className="mt-12 flex flex-col gap-6 text-lg font-medium">
          <a href="#" className="hover:text-orange-500">Criar Evento</a>
          <a href="#" className="hover:text-orange-500">Meus Eventos</a>
          <a href="#" className="hover:text-orange-500">Meus Ingressos</a>
          <a href="#" className="text-orange-600 font-semibold">
            Acesse sua conta
          </a>
        </nav>
      </div>
    </div>
  );
}
