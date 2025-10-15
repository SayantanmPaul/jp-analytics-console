# WARP.md

This file provides guidance to WARP (warp.dev) when working with code in this repository.

## Common Development Commands

- **Start Development Server:**

  ```bash
  npm run dev
  ```

  This will run the Next.js development server. You can also use `yarn dev`, `pnpm dev`, or `bun dev`.

- **Build for Production:**

  ```bash
  npm run build
  ```

- **Start Production Server:**

  ```bash
  npm run start
  ```

- **Lint Code:**
  ```bash
  npm run lint
  ```

## Code Structure Overview

This project is a Next.js application, emphasizing server-rendered, React-based front-end capabilities. Here's a high-level view of the project's architecture:

- **Pages Directory:** Contains all the page components which are automatically routed by Next.js.
- **Public Directory:** Static files like images.
- **App Directory:** Core application logic and components. Edit `app/page.tsx` to change the homepage.

## Important Notes

Ensure the compatibility of Node.js and npm versions as per the project's configuration, and check the `package.json` for any additional dependencies to be aware of during development.
