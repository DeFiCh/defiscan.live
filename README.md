[![CI](https://github.com/BirthdayResearch/defiscan.live/actions/workflows/ci.yml/badge.svg)](https://github.com/BirthdayResearch/defiscan.live/actions/workflows/ci.yml)
[![scan](https://img.shields.io/endpoint?url=https://dashboard.cypress.io/badge/count/oa9mrn/main&style=flat&logo=cypress)](https://dashboard.cypress.io/projects/oa9mrn/runs)
[![codecov](https://codecov.io/gh/DeFiCh/scan/branch/main/graph/badge.svg?token=GZe1B7l9ra)](https://codecov.io/gh/DeFiCh/scan)
[![Maintainability](https://api.codeclimate.com/v1/badges/9e2e89a0c9cfa93478eb/maintainability)](https://codeclimate.com/github/DeFiCh/scan/maintainability)

# [DeFi Scan](https://defiscan.live)

> https://defiscan.live

[![Netlify Status](https://api.netlify.com/api/v1/badges/7c8f536f-028f-493f-953f-293dcde36f89/deploy-status)](https://app.netlify.com/sites/defi-scan/deploys)

DeFi Scan, everything one-stop location for DeFi Blockchain. Powered
by [DeFi Jellyfish](https://github.com/BirthdayResearch/jellyfishsdk) & ocean network.

## Developing & Contributing

Thanks for contributing, appreciate all the help we can get. Feel free to make a pull-request, we will guide you along
the way to make it mergeable. Here are some of our documented [contributing guidelines](CONTRIBUTING.md).

We use `npm 7` for this project, it's required to set
up [npm workspaces](https://docs.npmjs.com/cli/v7/using-npm/workspaces).

```shell
npm install --include=dev
```

### Getting started

First, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### About `Next.js`

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.
- [Netlify Plugin NextJs](https://github.com/netlify/netlify-plugin-nextjs) SSR is enabled by default.

### Project Structure

```txt
scan/
├─ .github/
├─ content/
├─ public/
├─ src/
│  ├─ components/
│  ├─ layouts/
│  ├─ pages/
│  │  ├─ slugs/*.tsx
│  │  └─ index.tsx
│  ├─ store/
│  └─ styles/
```

DeFi Scan project is structured with 2 core directories. Each pull request will likely carry significant changes into
those directories.

| Directory         | Description                                                  |
| ----------------- | ------------------------------------------------------------ |
| `/.github`        | workflow for shift left automation                           |
| `/content`        | static code based content management system with type safety |
| `/public`         | static resources                                             |
| `/src/components` | top level components for a shared design language            |
| `/src/layouts`    | top level layouts for shared page layout & components        |
| `/src/pages`      | each page is associated with a route based on its file name  |
| `/src/store`      | global state that is used in at least more than once         |
| `/app/styles`     | tailwind css style configuration                             |

### IntelliJ IDEA

IntelliJ IDEA is the IDE of choice for writing and maintaining this library. IntelliJ's files are included for
convenience with basic toolchain setup but use of IntelliJ is totally optional.

### Security issues

If you discover a security vulnerability in
`DeFi Scan`, [please see submit it privately](https://github.com/DeFiCh/.github/blob/main/SECURITY.md).

## License & Disclaimer

By using `DeFi Scan` (this repo), you (the user) agree to be bound by [the terms of this license](LICENSE).
