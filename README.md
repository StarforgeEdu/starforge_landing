# Starforge landing page

Responsive public landing page for Starforge, built with Vue 3 and Vite and served from a production Nginx container.

The page presents the CEO web/mobile, staff web/mobile, mobile-only family app, and a clearly labeled coming-soon desktop IELTS Mock Room workflow. It also includes a responsive floating navigation, active-section progress, a keyboard-friendly mobile menu, and a smooth back-to-top control.

## Local development

```bash
npm install
npm run dev
```

Open `http://localhost:5173`.

## Production build and checks

```bash
npm run build
npm run test:e2e
```

The Playwright suite covers desktop and mobile rendering, supplied prices and contacts, overflow, mobile navigation, and serious/critical automated accessibility issues.

Starforge’s brand promise is: “Technology built for the people shaping tomorrow.”

## Docker

```bash
docker compose up --build
```

Open `http://localhost:8080`. The container serves the built site through unprivileged Nginx and exposes `/healthz` for health checks.

## Public contact details

- Telegram: `https://t.me/starforge_edu`
- Instagram: `@starforge_edu`
- Email: `edustarforge@gmail.com`
- Phone: `+998 99 035 88 49`
