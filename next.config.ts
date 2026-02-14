import { addDoc, collection } from "firebase/firestore";
import type { NextConfig } from "next";
import { db } from "./lib/firebase";

const nextConfig: NextConfig = {
  /* config options here */
};


await addDoc(collection(db, "eventos"), {
  nome: "Evento via código",
  criadoEm: new Date(),
});
export default nextConfig;
