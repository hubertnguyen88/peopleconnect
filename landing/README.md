# PeopleConnect Landing

Next.js 14 marketing site for **peopleconnect.world**.

## Scripts

```bash
pnpm install
pnpm dev      # http://localhost:3000
pnpm build
pnpm start
pnpm lint
```

## Docker

```bash
docker compose up -d --build
```

App listen port **3000** trong container. Trên Lightsail production map **3001:3000**.

## Pages

- `/` — Home
- `/global-talent`
- `/international-payroll`
- `/leads`
- `/visa-immigration`

## Env

Contact form (`/api/contactFormSubmit`) có thể cần biến reCAPTCHA / backend — xem `src/app/api/contactFormSubmit/route.ts`.
