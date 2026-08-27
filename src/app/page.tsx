import { Hero } from "@/components/sections/Hero";
import { QuienEs } from "@/components/sections/QuienEs";
import { Pilares } from "@/components/sections/Pilares";
import { PropuestaPreview } from "@/components/sections/PropuestaPreview";
import { EventosPreview } from "@/components/sections/EventosPreview";
import { GalleryPreview } from "@/components/sections/GalleryPreview";
import { CTAFinal } from "@/components/sections/CTAFinal";

export default function Home() {
  return (
    <>
      <Hero />
      <QuienEs />
      <Pilares />
      <PropuestaPreview />
      <EventosPreview />
      <GalleryPreview />
      <CTAFinal />
    </>
  );
}
