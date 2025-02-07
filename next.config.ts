import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.digikala.com",
        pathname: "/statics/**",
      },
    ],
  },
};

export default nextConfig;
