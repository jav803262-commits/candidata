import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Penacho } from "@/components/common/Penacho";

export default function NotFound() {
  return (
    <Container className="flex min-h-[60vh] flex-col items-center justify-center py-20 text-center">
      <Penacho className="h-20 w-auto opacity-70" />
      <p className="mt-6 font-display text-5xl text-purple">404</p>
      <h1 className="mt-2 font-display text-2xl text-ink">
        Esta página no existe
      </h1>
      <p className="mt-3 max-w-sm text-sm text-ink-soft">
        Puede que el enlace esté mal escrito o que la página se haya movido.
      </p>
      <div className="mt-8">
        <Button href="/">Volver al inicio</Button>
      </div>
    </Container>
  );
}
