import { defineConfig } from 'astro/config';

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: "https://www.bmspto.com",
  integrations: [tailwind({
    applyBaseStyles: false,
  })],
  redirects: {
    "/slack": "https://join.slack.com/t/bms-parent-teacher/shared_invite/zt-36izqg9x1-pAJakGWRcBcRl_2gmn8FlA",
  },
});
