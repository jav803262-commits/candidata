import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // React Compiler estable en Next 16: memoiza componentes sin cambios manuales.
  // Igual que en los proyectos hermanos (la-cuadra / control-gastos).
  reactCompiler: true,
};

export default nextConfig;
