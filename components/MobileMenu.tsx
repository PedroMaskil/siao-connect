/**
 * Menu mobile
 * Abre como overlay com animação suave
 */
export default function MobileMenu({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 bg-black/40 z-50">
      <div className="absolute right-0 top-0 h-full w-64 bg-white p-6 animate-slide-in">
        <button
          onClick={onClose}
          className="text-gray-500 mb-6"
          aria-label="Fechar menu"
        >
          ✕
        </button>

        <nav className="flex flex-col gap-4 font-medium">
          <a> Criar Evento </a>
          <a> Meus Eventos </a>
          <a> Meus Ingressos </a>
          <a className="text-orange-500"> Acesse sua conta </a>
        </nav>
      </div>
    </div>
  );
}
