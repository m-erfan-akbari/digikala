import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.digikala.com",
        pathname: "/statics/**",
      },
      {
        protocol: "https",
        hostname: "dkstatics-public.digikala.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "dkms.digikala.com",
        pathname: "/static/**",
      },
    ],
  },
};

export default nextConfig;
