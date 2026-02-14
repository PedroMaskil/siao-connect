


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
