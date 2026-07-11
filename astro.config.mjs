import { defineConfig } from 'astro/config';

import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  site: "https://www.bmspto.net",
  vite: {
    plugins: [tailwindcss()],
  },
  redirects: {
    "/slack": "https://join.slack.com/t/bms-parent-teacher/shared_invite/zt-36izqg9x1-pAJakGWRcBcRl_2gmn8FlA",
    "/volunteer": "https://forms.gle/5DEVV71ibS2apgxA6",
  },
});
