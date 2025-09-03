// @ts-check
import { defineConfig, fontProviders } from 'astro/config';

import mdx from '@astrojs/mdx';

// https://astro.build/config
export default defineConfig({
  site: 'https://nexusdatalabs.github.io/',
  base: '/filecoin-watch',
  experimental: {
    fonts: [
      {
        provider: fontProviders.fontsource(),
        name: 'JetBrains Mono',
        cssVariable: '--font-jetbrains-mono',
        weights: ['400', '600'],
        styles: ['normal'],
        subsets: ['latin'],
        fallbacks: [
          'monospace'
        ]
      },
    ],
  },

  integrations: [mdx()],
});
