# Portfolio: Abdelrahman Shawky

Personal portfolio site for a senior frontend developer based in Cairo. One page: pitch, three demo projects with live links and source, about and skills, contact.

**Live site:** https://portfolio-sable-nine-mdl9fa0pgi.vercel.app

## The projects it links to

| Project | What it shows | Live | Code |
| --- | --- | --- | --- |
| Orbit Admin | Dashboard: data tables, charts, filters, protected routes | [demo](https://orbit-admin-cyan.vercel.app) | [repo](https://github.com/abdoshawky1/orbit-admin) |
| Orbit Shop | Storefront: catalog, cart, stock rules, checkout | [demo](https://orbit-shop-one.vercel.app) | [repo](https://github.com/abdoshawky1/orbit-shop) |
| Nile Smile Booking | Booking flow with slot logic and an admin view | [demo](https://nile-smile-booking.vercel.app) | [repo](https://github.com/abdoshawky1/nile-smile-booking) |

These are demo products built for this portfolio, not client work. Each README lists what is simplified (for example: data lives in the browser, the sign-in is a demo).

## How it works

- **Content is data.** Everything on the page comes from `src/data/profile.js`. Adding a project means adding one object.
- **A small test checks that data** (required fields, https links, unique ids, valid contact details), so a typo cannot ship a broken card.
- **React + Vite, no other libraries.** Static output, so it deploys anywhere.
- **Responsive and accessible basics:** keyboard focus styles, alt text, semantic sections, readable on a phone.

## Run it locally

```bash
npm install
npm run dev      # http://localhost:5173
npm test
npm run build
```

## Notes

- Screenshots in `public/shots` are taken from the live demos, so they need refreshing when the demos change.
- Next: a page per project with the key decisions, and a downloadable CV.
