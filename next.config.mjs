/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "cdn.discordapp.com",
      },
      {
        hostname: "lh3.googleusercontent.com",
        protocol: "https",
      },
    ]
  }
};

export default nextConfig;
