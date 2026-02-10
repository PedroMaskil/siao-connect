"use client";

import { collection, addDoc } from "firebase/firestore";
import { db } from "@/lib/firebase";

export default function Home() {
  const salvar = async () => {
    await addDoc(collection(db, "testes"), {
      nome: "Teste Firestore",
      criadoEm: new Date(),
    });
    alert("Salvo com sucesso!");
  };

  return <button onClick={salvar}>Salvar teste</button>;
}
