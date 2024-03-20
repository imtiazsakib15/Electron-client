/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "",
        port: "",
        // pathname: '/my-bucket/**',
      },
    ],
  },
};

export default nextConfig;
