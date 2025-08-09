import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Generate a fully static export for Netlify static hosting
  output: "export",
};

export default nextConfig;
