import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  experimental: {
    agentFeedback: true,
  },
  cacheComponents: true,
  partialPrefetching: true,
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },

  images: {
    remotePatterns: [
      { protocol: "https", hostname: "colormetall.com" },
      { protocol: "https", hostname: "kzmc.kg" },
      { protocol: "https", hostname: "stroimetall.kg" },
      { protocol: "https", hostname: "nerjaveyka.pythonanywhere.com" },
      { protocol: "https", hostname: "encrypted-tbn0.gstatic.com" },
    ],
  },
};

export default nextConfig;
