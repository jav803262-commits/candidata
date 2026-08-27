import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { contacto } from "@/data/contacto";
import { whatsappUrl } from "@/lib/site";

/** CTA principal del sitio: "Súmate". En esta fase NO hay backend ni formulario
 * que almacene datos — abre WhatsApp con un mensaje prellenado (número del perfil
 * público, ver `contacto.ts`). Se reemplaza por el flujo real en una fase posterior. */
export function SumateButton({
  size = "md",
  variant = "primary",
  label = "Súmate",
  className = "",
}: {
  size?: "md" | "lg";
  variant?: "primary" | "outline" | "onDark";
  label?: string;
  className?: string;
}) {
  const href = whatsappUrl(contacto.whatsapp, contacto.mensajeSumate);

  return (
    <Button href={href} external size={size} variant={variant} className={className}>
      <MessageCircle size={size === "lg" ? 20 : 18} aria-hidden="true" />
      {label}
    </Button>
  );
}
