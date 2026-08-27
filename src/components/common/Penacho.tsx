/** Motivo "penacho/abanico" de la marca: abanico de rombos geométricos que evoca
 * el penacho zapoteco del logo. Puramente decorativo (`aria-hidden`). Se usa en
 * el hero, en separadores de sección y como base del favicon.
 *
 * Nota: es una interpretación libre para la fase de propuesta; el logo real
 * (SVG) debe reemplazarlo antes de producción. */
export function Penacho({
  className = "",
  variant = "brand",
}: {
  className?: string;
  variant?: "brand" | "mono-light" | "mono-dark";
}) {
  // 9 plumas repartidas de -76° a 76°.
  const plumas = Array.from({ length: 9 }, (_, i) => -76 + i * 19);

  const relleno =
    variant === "mono-light"
      ? "#ffffff"
      : variant === "mono-dark"
        ? "#281253"
        : "url(#penachoGrad)";
  const filo =
    variant === "mono-light" ? "rgba(255,255,255,0.45)" : "#dcdce2";
  const detalle =
    variant === "mono-dark" ? "rgba(255,255,255,0.5)" : "#ffffff";

  return (
    <svg
      viewBox="0 0 200 140"
      className={className}
      aria-hidden="true"
      focusable="false"
    >
      <defs>
        <linearGradient id="penachoGrad" x1="0" y1="1" x2="0" y2="0">
          <stop offset="0%" stopColor="#281253" />
          <stop offset="55%" stopColor="#3b1e70" />
          <stop offset="100%" stopColor="#8446c6" />
        </linearGradient>
      </defs>

      <g transform="translate(100 120)">
        {plumas.map((ang) => (
          <g key={ang} transform={`rotate(${ang})`}>
            {/* pluma: rombo alargado */}
            <path
              d="M0 0 L11 -58 L0 -104 L-11 -58 Z"
              fill={relleno}
              stroke={filo}
              strokeWidth="1.5"
              strokeLinejoin="round"
            />
            {/* detalle geométrico interior */}
            <path
              d="M0 -34 L4.5 -58 L0 -80 L-4.5 -58 Z"
              fill={detalle}
              opacity="0.85"
            />
            <circle cx="0" cy="-95" r="2.4" fill={detalle} />
          </g>
        ))}
        {/* arco base */}
        <path
          d="M-34 0 A34 34 0 0 1 34 0"
          fill="none"
          stroke={variant === "mono-light" ? "#ffffff" : "#9c9ca9"}
          strokeWidth="4"
          strokeLinecap="round"
        />
        <circle
          cx="0"
          cy="0"
          r="5"
          fill={variant === "mono-light" ? "#ffffff" : "#3b1e70"}
        />
      </g>
    </svg>
  );
}
