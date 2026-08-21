// Brand assets are served from the public TalesCO assets repository so this
// repo doesn't need to carry the binaries. Override the base URL with
// VITE_ASSETS_BASE_URL in .env.local (see .env.template).
const ASSETS_BASE_URL =
  import.meta.env.VITE_ASSETS_BASE_URL ??
  'https://raw.githubusercontent.com/TalesOfConquerOnline/talesco-assets/refs/heads/main/assets';

export const DB_LOGO_URL = `${ASSETS_BASE_URL}/db.png`;
export const LOGO_URL = `${ASSETS_BASE_URL}/logo.png`;
