const url = require("node:url");

const securityHeaders = [
  {
    key: "Content-Security-Policy",
    value:
      `default-src 'none';` +
      `base-uri 'none';` +
      `child-src 'self';` +
      `form-action 'none';` +
      `frame-ancestors 'none';` +
      `img-src 'self' data:;` +
      `media-src 'self';` +
      `object-src 'none';` +
      `script-src 'self' ${
        process.env.NODE_ENV === "development" ? `'unsafe-eval'` : ""
      };` +
      `style-src 'self' fonts.googleapis.com 'unsafe-inline';` +
      `font-src fonts.gstatic.com data:;` +
      `connect-src 'self' ocean.defichain.com *.jellyfishsdk.com ${
        url.parse(process.env.NEXT_PUBLIC_API_CLIENT_ENDPOINT || "")?.host } ${
          url.parse(process.env.NEXT_PUBLIC_RPC_CLIENT_ENDPOINT || "")?.host } ${ 
            process.env.NODE_ENV === "development"
          ? `ws://localhost:3000/_next/webpack-hmr`
          : ""
      };`,
  },
  {
    key: "Referrer-Policy",
    value: "same-origin",
  },
  {
    key: "X-Content-Type-Options",
    value: "nosniff",
  },
  {
    key: "X-Frame-Options",
    value: "DENY",
  },
  {
    key: "X-XSS-Protection",
    value: "1; mode=block",
  },
  {
    key: "Strict-Transport-Security",
    value: "max-age=63072000; includeSubDomains; preload",
  },
];

module.exports = {
  experimental: {
    forceSwcTransforms: true,
  },
  swcMinify: true,
  reactStrictMode: true,
  pageExtensions: ["page.tsx", "page.ts"],
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: securityHeaders,
      },
    ];
  },
};
