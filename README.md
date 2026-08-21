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

## Getting started

```bash
yarn          # install dependencies
yarn dev      # start the dev server (http://localhost:5173)
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
