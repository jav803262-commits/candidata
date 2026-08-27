import { Container } from "@/components/ui/Container";

type Tono = "paper" | "lavender" | "marca";

const tonos: Record<Tono, string> = {
  paper: "bg-paper text-ink",
  lavender: "bg-lavender text-ink",
  marca: "bg-marca text-white",
};

/** Bloque vertical con ritmo consistente. `tono` controla el fondo. */
export function Section({
  children,
  tono = "paper",
  id,
  className = "",
  contieneContainer = true,
}: {
  children: React.ReactNode;
  tono?: Tono;
  id?: string;
  className?: string;
  contieneContainer?: boolean;
}) {
  return (
    <section
      id={id}
      className={`scroll-mt-24 py-16 sm:py-20 lg:py-24 ${tonos[tono]} ${className}`}
    >
      {contieneContainer ? <Container>{children}</Container> : children}
    </section>
  );
}
