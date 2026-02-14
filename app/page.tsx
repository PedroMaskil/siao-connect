


"use client";

import { collection, addDoc } from "firebase/firestore";
import { db } from "@/lib/firebase";

/**
 * Página inicial temporária para testar Firestore
 */
export default function Home() {

  /**
   * Salva um documento de teste no Firestore
   */
  const salvarTeste = async () => {
    try {
      await addDoc(collection(db, "eventos"), {
        nome: "Evento Teste",
        criadoEm: new Date(),
      });

      alert("Salvo com sucesso 🚀");
    } catch (error) {
      console.error("Erro ao salvar:", error);
    }
  };

  return (
    <main style={{ padding: 40 }}>
      <h1>Teste Firebase</h1>

      <button
        onClick={salvarTeste}
        style={{
          padding: "10px 20px",
          background: "#f97316",
          color: "#fff",
          border: "none",
          borderRadius: 8,
          cursor: "pointer",
        }}
      >
        Testar Firestore
      </button>
    </main>
  );
}








/**
import Header from "@/components/Header";
import SearchBox from "@/components/SearchBox";

/**
 * Página inicial do Sião Connect
 
export default function Home() {
  return (
    <div className="min-h-screen bg-[#fffaf5] text-gray-800">
      <Header />

      <main className="flex flex-col items-center justify-center mt-40 px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-light leading-tight mb-6">
          Conectando pessoas <br />
          a <span className="text-orange-500 font-medium">eventos especiais</span>
        </h2>

        <p className="text-gray-500 mb-10 max-w-xl">
          Encontre, crie e gerencie eventos de forma simples, moderna e organizada.
        </p>

        <div className="w-full max-w-xl">
          <SearchBox />
        </div>
      </main>
    </div>
    /*testando alteração 123123
  );
}