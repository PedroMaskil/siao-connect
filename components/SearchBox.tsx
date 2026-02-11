/**
 * Campo de busca animado
 * - Anima ao focar
 * - Visual suave
 */
export default function SearchBox() {
  return (
    <input
      type="text"
      placeholder="Buscar eventos..."
      className="
        w-full px-6 py-4 rounded-full
        bg-white border border-orange-200
        shadow-sm
        transition-all duration-300
        focus:outline-none
        focus:ring-2 focus:ring-orange-300
        focus:scale-[1.02]
        placeholder-gray-400
      "
    />
  );
}
