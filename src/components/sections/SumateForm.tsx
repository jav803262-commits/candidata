"use client";

import { useState } from "react";
import { MessageCircle } from "lucide-react";
import { contacto } from "@/data/contacto";
import { whatsappUrl } from "@/lib/site";

/** Formulario "Súmate" SIN backend: compone un mensaje y abre WhatsApp.
 * No hace peticiones de red ni guarda datos — por eso no necesita validación de
 * servidor ni aviso de privacidad de recolección en esta fase (ver §10-11 SPEC).
 * El número sale del perfil público (`contacto.whatsapp`), pendiente de confirmar. */
export function SumateForm() {
  const [nombre, setNombre] = useState("");
  const [zona, setZona] = useState("");
  const [mensaje, setMensaje] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const partes = [
      `Hola, soy ${nombre || "una persona interesada"}.`,
      zona ? `Soy de ${zona}.` : "",
      mensaje || "Quiero sumarme a la campaña de Selene Palmero.",
    ].filter(Boolean);
    window.open(
      whatsappUrl(contacto.whatsapp, partes.join(" ")),
      "_blank",
      "noopener,noreferrer",
    );
  }

  const campo =
    "mt-1 w-full rounded-xl border border-line bg-paper px-4 py-3 text-sm text-ink outline-none focus:border-violet focus:ring-2 focus:ring-violet/25";

  return (
    <form onSubmit={handleSubmit} className="rounded-2xl border border-line bg-paper p-6">
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="block text-sm font-medium text-ink">
          Nombre
          <input
            type="text"
            required
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            className={campo}
            placeholder="Tu nombre"
          />
        </label>
        <label className="block text-sm font-medium text-ink">
          Barrio o colonia <span className="font-normal text-ink-soft">(opcional)</span>
          <input
            type="text"
            value={zona}
            onChange={(e) => setZona(e.target.value)}
            className={campo}
            placeholder="Ej. Santa María Reoloteca"
          />
        </label>
      </div>
      <label className="mt-4 block text-sm font-medium text-ink">
        ¿Cómo quieres ayudar? <span className="font-normal text-ink-soft">(opcional)</span>
        <textarea
          value={mensaje}
          onChange={(e) => setMensaje(e.target.value)}
          rows={3}
          className={campo}
          placeholder="Difundir, acompañar recorridos, apoyar en mi zona…"
        />
      </label>

      <button
        type="submit"
        className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-full bg-purple px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-purple-deep sm:w-auto"
      >
        <MessageCircle size={18} aria-hidden="true" />
        Enviar por WhatsApp
      </button>

      <p className="mt-4 text-xs leading-relaxed text-ink-soft">
        Al enviar se abrirá WhatsApp con tu mensaje ya redactado. Este sitio{" "}
        <strong>no almacena ningún dato</strong>; tú decides si envías el mensaje.
      </p>
    </form>
  );
}
