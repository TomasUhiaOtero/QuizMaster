// @ts-check
import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default {
  integrations: [react()],
  vite: {
    plugins: [tailwindcss()]
  }
};
