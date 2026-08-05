# PeopleConnect

Monorepo cho [peopleconnect.world](https://peopleconnect.world).

| Path | Mô tả |
|------|--------|
| `landing/` | Marketing site (Next.js 14) — HR partner landing |

## Landing — chạy local

```bash
cd landing
pnpm install
pnpm dev
```

Mở [http://localhost:3000](http://localhost:3000).

## Deploy (Docker)

Trên server hiện tại (Lightsail `3.99.28.233`):

```bash
cd landing
docker compose up -d --build
```

Container map port **3001→3000**; Nginx proxy `peopleconnect.world` → `localhost:3001`.

## Nguồn

Code được kéo từ production server (2026-08-05), tương ứng commit upstream:

- Repo cũ: `khoanguyen-yang/peopleconnect-landing-page`
- Commit: `2d7c124` — *fix* (2025-12-13)
