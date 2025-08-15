/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["cdn.matteobruni.it"],
  },
  experimental: {
    appDir: true
  }
};

module.exports = nextConfig;
