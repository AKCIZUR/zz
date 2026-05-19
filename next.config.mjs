import { createMDX } from 'fumadocs-mdx/next';

const withMDX = createMDX();

const repo = process.env.GITHUB_REPOSITORY?.split('/')[1] ?? 'zz';
const isProduction = process.env.NODE_ENV === 'production';
const basePath = isProduction ? `/${repo}` : undefined;

const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  basePath,
  assetPrefix: isProduction ? `${basePath}/` : undefined,
};

export default withMDX(nextConfig);
