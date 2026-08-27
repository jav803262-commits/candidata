import { AlertTriangle } from "lucide-react";

/** Pie de transparencia electoral — TEXTO PLACEHOLDER.
 * El contenido definitivo (responsable del sitio, identificación de quién paga
 * la propaganda, registro ante la autoridad electoral —IEEPCO / INE según
 * aplique—) queda pendiente de revisión jurídica. Ver §11 del SPEC.
 *
 * `variant="banner"` lo muestra destacado (páginas /aviso-legal y /privacidad);
 * `variant="footer"` es la nota discreta del pie. */
export function LegalDisclaimer({
  variant = "footer",
}: {
  variant?: "footer" | "banner";
}) {
  const texto =
    "Borrador — pendiente de revisión jurídica. Antes de su publicación como propaganda electoral, este sitio debe incluir la identificación de la persona responsable, la mención de quién financia su difusión y, en su caso, el registro ante la autoridad electoral competente. Este contenido es una demostración y no constituye propaganda electoral registrada.";

  if (variant === "banner") {
    return (
      <div className="flex gap-3 rounded-xl border border-violet/30 bg-lavender p-4 text-sm text-ink-soft">
        <AlertTriangle
          size={18}
          className="mt-0.5 shrink-0 text-violet"
          aria-hidden="true"
        />
        <p>{texto}</p>
      </div>
    );
  }

  return (
    <p className="text-xs leading-relaxed text-white/55">
      <span className="font-semibold text-white/70">Aviso: </span>
      {texto}
    </p>
  );
}
