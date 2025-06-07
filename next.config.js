// eslint-disable-next-line @typescript-eslint/no-require-imports
const SemiWebpackPlugin = require('@douyinfe/semi-webpack-plugin').default;

/** @type {import('next').NextConfig} */
const nextConfig = {
  swcMinify: true,
  reactStrictMode: true,
  transpilePackages: [
    '@douyinfe/semi-ui',
    '@douyinfe/semi-icons',
    '@douyinfe/semi-illustrations',
  ],
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.plugins.push(
        new SemiWebpackPlugin({
          cssLayer: true,
        })
      );
    }
    return config;
  },
};

module.exports = nextConfig;
