# TalesCO Community Website

The community website for **[Tales of ConquerOnline](https://talesco.net)** (TalesCO), a classic
Conquer Online private server. This site is open source and **built and maintained by the TalesCO
community** — contributions are welcome.

It is a static React site (no backend, no authentication) that will grow into the community's home
for game knowledge:

- **/** — landing page
- **/wiki** — game wiki *(under construction)*
- **/market** — market reference *(under construction)*

## Tech stack

- [React 19](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vite.dev/) with the React Compiler enabled
- [Material UI v5](https://mui.com/) — themed to match the main TalesCO website
- [React Router v7](https://reactrouter.com/)

## Prerequisites

The site needs **Node.js 24** and **Yarn**. The recommended way to get both is through a Node
version manager plus Corepack, as described below.

### What is nvm?

[nvm](https://github.com/nvm-sh/nvm) (Node Version Manager) lets you install several versions of
Node.js side by side and switch between them per shell or per project. It avoids installing Node
system-wide (no `sudo`), makes upgrading painless, and keeps your global packages separate for each
Node version. On Windows the equivalent tool is
[nvm-windows](https://github.com/coreybutler/nvm-windows), which offers the same `nvm` commands from
PowerShell.

### Linux / macOS

1. Install nvm:

   ```bash
   curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.7/install.sh | bash
   ```

   The script adds a snippet to your shell profile (`~/.bashrc`, `~/.zshrc`, …). Restart your
   terminal (or `source` the profile) and confirm it works with `nvm --version`.

2. Install Node 24 and make it the default:

   ```bash
   nvm install 24
   nvm alias default 24
   nvm use 24
   node --version   # v24.x.x
   ```

### Windows (PowerShell)

1. Install nvm-windows. Either grab `nvm-setup.exe` from the
   [latest release](https://github.com/coreybutler/nvm-windows/releases/latest) and run the
   installer, or use winget:

   ```powershell
   winget install CoreyButler.NVMforWindows
   ```

   Open a **new** PowerShell window afterwards and confirm with `nvm version`.

2. Install Node 24 and make it the default (run PowerShell as Administrator the first time —
   nvm-windows switches versions via a symlink):

   ```powershell
   nvm install 24
   nvm use 24
   node --version   # v24.x.x
   ```

   `nvm use` on Windows is persistent, so Node 24 stays selected for all future sessions.

### Enable Yarn with Corepack

Node ships with [Corepack](https://nodejs.org/api/corepack.html), which provides `yarn` without a
separate install. Enable it once per Node version (on Windows, run this in an Administrator
PowerShell):

```bash
corepack enable
yarn --version
```

> **Note:** if `corepack` is not found (Node 25+ no longer bundles it), install it first with
> `npm install -g corepack` and then run `corepack enable`.

## Getting started

```bash
yarn          # install dependencies
yarn dev      # start the dev server, then open http://localhost:5173 in your browser
              # (any code changes you make are reflected instantly via hot reload)
yarn build    # type-check and build for production (dist/)
yarn lint     # run eslint
yarn preview  # preview the production build
```

## Configuration

Build-time configuration is done through [Vite env variables](https://vite.dev/guide/env-and-mode):

```bash
cp .env.template .env.local   # then edit .env.local
```

`.env.local` is gitignored; `.env.template` documents every variable and its default.

| Variable | Purpose |
|----------|---------|
| `VITE_ASSETS_BASE_URL` | Base URL the brand assets (`db.png`, `logo.png`, …) are loaded from |

## Contributing

1. Fork the repository and create a feature branch.
2. Make your change — keep the MUI theme in `src/config/theme.ts` as the single source of styling
   truth so the site stays visually consistent with the main TalesCO website.
3. Run `yarn lint` and `yarn build` before opening a pull request.
4. Open a pull request describing what the change does.

Commit messages follow [Conventional Commits](https://www.conventionalcommits.org/)
(`feat:`, `fix:`, `docs:`, …).

## License

[MIT](./LICENSE)
