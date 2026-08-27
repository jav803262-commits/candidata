type Align = "left" | "center";

/** Encabezado de sección: eyebrow opcional + título serif + texto de apoyo.
 * `tono="onDark"` para usarlo sobre la franja morada. */
export function SectionHeader({
  eyebrow,
  title,
  description,
  align = "left",
  tono = "light",
  as = "h2",
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: Align;
  tono?: "light" | "onDark";
  as?: "h1" | "h2";
}) {
  const Tag = as;
  const alineado = align === "center" ? "text-center mx-auto" : "";
  const colorEyebrow = tono === "onDark" ? "text-silver-light" : "text-violet";
  const colorTitle = tono === "onDark" ? "text-white" : "text-ink";
  const colorDesc = tono === "onDark" ? "text-silver-light" : "text-ink-soft";

  return (
    <div className={`max-w-2xl ${alineado}`}>
      {eyebrow && (
        <p
          className={`mb-3 text-xs font-semibold uppercase tracking-[0.22em] ${colorEyebrow}`}
        >
          {eyebrow}
        </p>
      )}
      <Tag
        className={`font-display text-3xl leading-tight tracking-tight sm:text-4xl ${colorTitle}`}
      >
        {title}
      </Tag>
      {description && (
        <p className={`mt-4 text-base leading-relaxed sm:text-lg ${colorDesc}`}>
          {description}
        </p>
      )}
    </div>
  );
}
