import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
};


await addDoc(collection(db, "eventos"), {
  nome: "Evento via código",
  criadoEm: new Date(),
});
export default nextConfig;
