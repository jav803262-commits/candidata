/** Tarjeta base: fondo claro, borde sutil de marca, esquinas suaves. */
export function Card({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`rounded-2xl border border-line bg-paper p-6 shadow-[0_1px_2px_rgba(40,18,83,0.04)] ${className}`}
    >
      {children}
    </div>
  );
}
