import { defineConfig } from "astro/config";
import icon from "astro-icon";
import tailwind from "@astrojs/tailwind";

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: 'https://landing.cemaqui.com',
  integrations: [icon({
    include: {
      tabler: ["*"]
    }
  }), tailwind(), sitemap()]
});