import type { MetadataRoute } from "next";

import { SITE_URL } from "@/lib/site-config";

export default function robots(): MetadataRoute.Robots {
  const isProd = process.env.VERCEL_ENV === "production";

  return {
    rules: [
      {
        userAgent: "*",
        ...(isProd ? { allow: "/", disallow: ["/studio"] } : { disallow: "/" }), // Disallow all routes for non-production
      },
    ],
    host: SITE_URL,
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}
