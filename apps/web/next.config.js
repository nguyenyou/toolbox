const {
  createVanillaExtractPlugin
} = require('@vanilla-extract/next-plugin');
const withVanillaExtract = createVanillaExtractPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ['@nguyenyou/ui'],
  modularizeImports: {
    '@nguyenyou/ui': {
      transform: '@nguyenyou/ui/components/{{member}}/{{member}}'
    }
  }
};

module.exports = withVanillaExtract(nextConfig);