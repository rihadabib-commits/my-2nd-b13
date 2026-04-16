 /** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        // https://i.pravatar.cc/150?img=1
        protocol: "https",
        hostname: "i.pravatar.cc",
        pathname: "**",
      },
    ],
  },
};

export default nextConfig;