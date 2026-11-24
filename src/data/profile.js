export const profile = {
  name: 'Abdelrahman Shawky',
  title: 'Senior Frontend Developer',
  location: 'Cairo, Egypt',
  pitch: 'I build React applications that load fast, stay easy to change, and work on every screen. Four years of production React, with a speciality in maps and GIS interfaces.',
  email: 'abdoshawky24@gmail.com',
  phone: '01159864566',
  github: 'https://github.com/abdoshawky1',
};

export const skills = [
  { group: 'Frontend', items: ['JavaScript (ES6+)', 'React', 'Redux Toolkit', 'HTML5 and CSS3', 'SASS', 'Tailwind', 'Vite and Webpack'] },
  { group: 'Maps and GIS', items: ['OpenLayers', 'Mapbox', 'ESRI ArcGIS', 'GeoServer'] },
  { group: 'Backend and tools', items: ['REST APIs', 'SQL and PostgreSQL', 'Git, GitHub, Bitbucket', 'Docker', 'AWS', 'CircleCI'] },
  { group: 'Practice', items: ['Component architecture', 'Performance tuning', 'Code reviews and mentoring', 'Clean code and SOLID', 'Agile/Scrum'] },
];

export const experience = [
  { role: 'Senior Frontend Developer', place: 'Penta-b, Cairo', period: '2022 to present', points: ['Build and maintain large React applications with Redux and Hooks.', 'Improve UI performance and page load time.', 'Integrate REST APIs and improve frontend architecture.', 'Mentor junior developers and lead code reviews.'] },
  { role: 'Frontend Developer (freelance)', place: 'Remote', period: '2020 to 2022', points: ['Built responsive React apps, dashboards and internal tools.', 'Cross-browser compatibility and reusable UI components.'] },
];

// Demo projects built for this portfolio. They are labelled as demos on purpose.
export const projects = [
  {
    id: 'orbit-admin',
    name: 'Orbit Admin',
    kind: 'Admin dashboard',
    summary: 'Sales overview and order management for an online shop: KPI cards with period comparison, a hand-written SVG revenue chart, and a searchable, sortable orders table with CSV export.',
    highlights: ['Filters kept in the URL', 'Order status follows business rules', 'Spreadsheet-safe CSV export'],
    stack: ['React', 'Vite', 'React Router', 'SVG charts'],
    live: 'https://orbit-admin-cyan.vercel.app',
    code: 'https://github.com/abdoshawky1/orbit-admin',
    image: '/shots/orbit-admin.jpg',
    note: 'Demo login shown on the sign-in page. Data is generated in the browser.',
  },
  {
    id: 'orbit-shop',
    name: 'Orbit Shop',
    kind: 'Storefront',
    summary: 'A small online store: product search and filters, cart with promo codes, checkout validation and order confirmation. Stock really drops when you buy.',
    highlights: ['Money handled as integer cents', 'Cart can never exceed stock', 'Egyptian phone number validation'],
    stack: ['React', 'Vite', 'React Router'],
    live: 'https://orbit-shop-one.vercel.app',
    code: 'https://github.com/abdoshawky1/orbit-shop',
    image: '/shots/orbit-shop.jpg',
    note: 'Demo store. Cash on delivery only, no payment data is collected.',
  },
  {
    id: 'nile-smile',
    name: 'Nile Smile Booking',
    kind: 'Booking app',
    summary: 'Online appointment booking for a dental clinic: pick a service, a date and a free slot, get a reference number. The clinic sees and cancels bookings in an admin view.',
    highlights: ['Slot logic separated and tested', 'Double-booking check on save', 'Works well on phones'],
    stack: ['React', 'Vite', 'React Router'],
    live: 'https://nile-smile-booking.vercel.app',
    code: 'https://github.com/abdoshawky1/nile-smile-booking',
    image: '/shots/nile-smile.jpg',
    note: 'Demo clinic. Bookings are saved in your browser only.',
  },
];
