# Webmon

## Overview

Webmon is a website, which monitors HTML-pages you wanted to, and reports you when new elements you specify appear on them.

Details are in the [specification](./docs/specification.md).

### Pages

| Page      | Description                             |
| --------- | --------------------------------------- |
| Home      | general information about the Webmon    |
| Dashboard | a place with all monitor reports        |
| Scripts   | a place to manage monitor scripts       |
| Auth      | a place for "Sign In" / "Sign Up" froms |

### Features

- Monitor scripts
- Roles (not implemented yet)
- ~~Incognito mode~~

### Technologies

- Frontend
  - Vite
  - React (+ Zustand)
  - SCSS modules
- Backend
  - Node.js
  - Express.js
  - Knex.js (PostgreSQL)
- Both
  - Typescript
  - Zod
