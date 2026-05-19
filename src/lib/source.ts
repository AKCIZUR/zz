import type { ComponentType } from 'react';

export type AnyPage = {
  data: {
    title: string;
    description: string;
    body: ComponentType<any>;
    toc: unknown[];
    full?: boolean;
    getText?: (mode?: 'processed' | 'raw') => Promise<string> | string;
  };
  path: string;
  url: string;
  locale: string;
  slugs: string[];
};

export const source = {
  pageTree: {},
  getPage: () => null as AnyPage | null,
  getPages: () => [] as AnyPage[],
  getPageTree: () => ({}),
  generateParams: () => [],
};

export function getPageImage() {
  return {
    url: '',
    segments: [],
  };
}

export function getPageMarkdownUrl() {
  return {
    url: '',
    segments: [],
  };
}

export async function getLLMText(page: AnyPage) {
  const processed = page.data.getText ? await page.data.getText('processed') : '';
  return `# ${page.data.title} (${page.url})\n\n${processed}`;
}
