/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  env: {
    ENOKI_PUB_KEY: process.env.ENOKI_PUB_KEY,
    GOOGLE_CLIENT_ID: process.env.GOOGLE_CLIENT_ID,
  },
  images: {
    domains: ['media.gqmagazine.fr'], // Add other domains as needed
  },
};

export default nextConfig;
