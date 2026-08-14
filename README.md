# District Dermatology

Marketing website for [District Dermatology](https://www.districtderm.com/), a premier medical, surgical, and cosmetic dermatology practice serving McLean and Vienna, Virginia.

Built as a modern multipage experience with clear navigation, strong brand presence, and conversion-focused CTAs (call and contact).

## Features

- Full-bleed homepage hero with rotating clinic imagery
- Services catalog with individual service detail pages
- Physicians directory and practice overview
- Patient testimonials, FAQ, and insurance & billing guidance
- Location pages for McLean and Vienna with embedded maps
- Contact form, footer social links, and sitewide call-to-action band
- Responsive layout optimized for mobile and desktop

## Tech stack

| Layer | Choice |
| --- | --- |
| Framework | [Next.js](https://nextjs.org/) 16 (App Router) |
| Language | TypeScript |
| UI | React 19, CSS Modules |
| Fonts | Manrope, Inter |
| Brand colors | `#F5F9F9` (background), `#36CDD0` (accent) |

## Getting started

**Requirements:** Node.js 20+ and npm.

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the development server |
| `npm run build` | Create a production build |
| `npm run start` | Serve the production build |
| `npm run lint` | Run ESLint |

## Project structure

```text
src/
  app/           # Routes and page-level styles
  components/    # Shared UI (Header, Hero, Footer, grids, forms)
  data/site.ts   # Practice content, nav, services, locations
public/
  images/        # Logo, clinic, doctor, and service assets
```

## Key routes

| Path | Page |
| --- | --- |
| `/` | Home |
| `/about` | About the practice |
| `/physicians` | Physicians |
| `/services` | Services & conditions |
| `/services/[slug]` | Service detail |
| `/testimonials` | Testimonials |
| `/insurance-and-billing` | Insurance & billing |
| `/contact` | Contact |
| `/location/va/mclean` | McLean office |
| `/location/va/vienna` | Vienna office |

## Content & configuration

Most practice copy, navigation, service listings, doctor profiles, FAQs, and location details live in `src/data/site.ts`. Update that file to change site content without restructuring pages.

Brand tokens and shared component styles are defined in `src/app/globals.css`.

## Deployment

This project is a standard Next.js application and can be deployed to any platform that supports Next.js (for example Vercel).

```bash
npm run build
npm run start
```

## License

Private project for District Dermatology. All rights reserved.
