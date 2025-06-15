import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export", // tells Next.js to use static export
  images: {
    unoptimized: true // required for next export
  }
};

export default nextConfig;
