"use client";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#fffaf5] text-gray-800">
      {/* NAVBAR */}
      <header className="w-full border-b border-orange-200/60">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
          {/* Logo */}
          <h1 className="text-2xl font-semibold tracking-wide text-orange-500">
            Sião Connect
          </h1>

          {/* Menu */}
          <nav className="hidden md:flex gap-8 text-sm font-medium">
            <a className="hover:text-orange-500 transition">Criar Evento</a>
            <a className="hover:text-orange-500 transition">Meus Eventos</a>
            <a className="hover:text-orange-500 transition">Meus Ingressos</a>
            <a className="px-4 py-2 rounded-full border border-orange-300 text-orange-500 hover:bg-orange-50 transition">
              Acesse sua conta
            </a>
          </nav>
        </div>
      </header>

      {/* CONTEÚDO CENTRAL */}
      <main className="flex flex-col items-center justify-center mt-40 px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-light leading-tight mb-6">
          Conectando pessoas <br />
          a <span className="text-orange-500 font-medium">eventos especiais</span>
        </h2>

        <p className="text-gray-500 mb-10 max-w-xl">
          Encontre, crie e gerencie eventos de forma simples e organizada.
        </p>

        {/* Caixa de busca */}
        <div className="w-full max-w-xl">
          <input
            type="text"
            placeholder="Buscar eventos..."
            className="w-full px-6 py-4 rounded-full bg-white 
                       border border-orange-200 
                       shadow-sm
                       focus:outline-none focus:ring-2 focus:ring-orange-300
                       placeholder-gray-400"
          />
        </div>
      </main>
    </div>
  );
}
