/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      // allowed image domains
      {
        protocol: "https",
        hostname: "*unsplash.com", // domain name (consult error message domain reference if unsure)
      },
    ],
  },
};

export default nextConfig;
