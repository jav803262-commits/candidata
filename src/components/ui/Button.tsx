import Link from "next/link";

type Variant = "primary" | "outline" | "ghost" | "onDark";
type Size = "md" | "lg";

const base =
  "inline-flex items-center justify-center gap-2 rounded-full font-semibold tracking-wide transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-violet disabled:opacity-60";

const variants: Record<Variant, string> = {
  primary: "bg-purple text-white hover:bg-purple-deep",
  outline: "border-2 border-purple text-purple hover:bg-purple hover:text-white",
  ghost: "text-purple hover:bg-lavender",
  onDark: "bg-white text-purple hover:bg-silver-light",
};

const sizes: Record<Size, string> = {
  md: "px-5 py-2.5 text-sm",
  lg: "px-7 py-3.5 text-base",
};

type CommonProps = {
  variant?: Variant;
  size?: Size;
  className?: string;
  children: React.ReactNode;
};

type AsLink = CommonProps & {
  href: string;
  external?: boolean;
  onClick?: never;
  type?: never;
};

type AsButton = CommonProps & {
  href?: never;
  external?: never;
  onClick?: () => void;
  type?: "button" | "submit";
};

/** Botón único del sitio: `a`/`Link` para navegar, `button` para acciones.
 * Enlaces externos (http / tel / wa.me) abren en pestaña nueva. */
export function Button(props: AsLink | AsButton) {
  const {
    variant = "primary",
    size = "md",
    className = "",
    children,
  } = props;
  const cls = `${base} ${variants[variant]} ${sizes[size]} ${className}`;

  if ("href" in props && props.href) {
    const esExterno =
      props.external ||
      props.href.startsWith("http") ||
      props.href.startsWith("tel:");

    if (esExterno) {
      return (
        <a
          href={props.href}
          className={cls}
          target="_blank"
          rel="noopener noreferrer"
        >
          {children}
        </a>
      );
    }
    return (
      <Link href={props.href} className={cls}>
        {children}
      </Link>
    );
  }

  return (
    <button
      type={props.type ?? "button"}
      onClick={props.onClick}
      className={cls}
    >
      {children}
    </button>
  );
}
