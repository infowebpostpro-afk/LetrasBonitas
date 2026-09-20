/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  trailingSlash: true,
  compress: true,
  poweredByHeader: false,
  allowedDevOrigins: ['192.168.1.6', '192.168.1.6:3000', 'localhost:3000'],
  async redirects() {
    return [
      {
        source: '/nombres-para-free-fire/nombres/',
        destination: '/nombres-para-free-fire/',
        permanent: true,
      },
      {
        source: '/nombres-para-free-fire/nombres',
        destination: '/nombres-para-free-fire/',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
