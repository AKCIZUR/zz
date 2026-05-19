export const appName = 'Docs';

export const gitConfig = {
  owner: process.env.GITHUB_REPOSITORY?.split('/')[0] ?? 'AKCIZUR',
  repo: process.env.GITHUB_REPOSITORY?.split('/')[1] ?? 'docs-zlh',
  branch: process.env.GITHUB_REF_NAME ?? 'main',
};
