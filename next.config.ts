import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/citysage-web-project",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
