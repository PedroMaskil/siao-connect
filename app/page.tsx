"use client";

export default function Home() {
  return (
    <div className="min-h-screen text-white">
      {/* NAVBAR */}
      <header className="w-full border-b border-orange-500/20">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
          {/* Logo */}
          <h1 className="text-xl font-bold text-orange-400">
            Sião Connect
          </h1>

          {/* Menu */}
          <nav className="hidden md:flex gap-6 text-sm text-gray-300">
            <a className="hover:text-orange-400 cursor-pointer">Criar Evento</a>
            <a className="hover:text-orange-400 cursor-pointer">Meus Eventos</a>
            <a className="hover:text-orange-400 cursor-pointer">Meus Ingressos</a>
            <a className="hover:text-orange-400 cursor-pointer">Acesse sua conta</a>
          </nav>
        </div>
      </header>

      {/* CONTEÚDO CENTRAL */}
      <main className="flex flex-col items-center justify-center mt-32 px-6">
        <h2 className="text-3xl md:text-4xl font-semibold mb-6 text-center">
          Encontre eventos e experiências
        </h2>

        {/* Caixa de busca */}
        <div className="w-full max-w-xl">
          <input
            type="text"
            placeholder="Buscar eventos..."
            className="w-full px-5 py-4 rounded-lg bg-[#1a1a1a] border border-orange-500/30 
                       focus:outline-none focus:ring-2 focus:ring-orange-400 
                       placeholder-gray-400 text-white"
          />
        </div>
      </main>
    </div>
  );
}
