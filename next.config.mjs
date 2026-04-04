/** @type {import('next').NextConfig} */
const nextConfig = {
  sassOptions: {
    compiler: "modern",
    silenceDeprecations: ["legacy-js-api"],
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  async headers() {
    const longCache = "public, max-age=31536000, immutable";
    return [
      {
        source: "/:path*",
        headers: [
          { key: "X-DNS-Prefetch-Control", value: "on" },
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=()",
          },
        ],
      },
      {
        source: "/_next/static/:path*",
        headers: [{ key: "Cache-Control", value: longCache }],
      },
      {
        source: "/icons/:path*",
        headers: [{ key: "Cache-Control", value: longCache }],
      },
      {
        source: "/trademarks/:path*",
        headers: [{ key: "Cache-Control", value: longCache }],
      },
      {
        source: "/images/:path*",
        headers: [{ key: "Cache-Control", value: longCache }],
      },
    ];
  },
};

export default nextConfig;
