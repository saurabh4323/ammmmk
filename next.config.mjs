/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'globalcxoaccelerator.com',
      },
    ],
  },
};

export default nextConfig;
