import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";
import { navigation, navigationLegal } from "@/lib/navigation";

export default function sitemap(): MetadataRoute.Sitemap {
  const rutas = [
    { path: "/", priority: 1, changeFrequency: "weekly" as const },
    ...navigation.map((n) => ({
      path: n.href,
      priority: 0.7,
      changeFrequency: "weekly" as const,
    })),
    ...navigationLegal.map((n) => ({
      path: n.href,
      priority: 0.2,
      changeFrequency: "yearly" as const,
    })),
  ];

  return rutas.map(({ path, priority, changeFrequency }) => ({
    url: `${SITE_URL}${path}`,
    lastModified: new Date(),
    changeFrequency,
    priority,
  }));
}
