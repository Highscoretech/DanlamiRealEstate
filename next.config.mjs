/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  // Property photography is the heaviest thing on the site and image weight is
  // the main Core Web Vitals risk, which Google uses as a ranking signal.
  // AVIF first, WebP as the fallback, JPEG only for browsers that need it.
  images: {
    formats: ["image/avif", "image/webp"],
    // A year: these files are content-addressed by next/image and never change
    // in place, so there is nothing to gain from revalidating sooner.
    minimumCacheTTL: 31536000,
  },

  // Nothing gained by advertising the framework.
  poweredByHeader: false,

  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
        ],
      },
    ];
  },
};

export default nextConfig;
