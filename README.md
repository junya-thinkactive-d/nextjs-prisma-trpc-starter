# Next.js + Prisma + tRPC Supabase Starter Template

## Table of Contents

1. [Introduction](#introduction)
2. [Project Structure](#project-structure)
3. [Installation](#installation)
4. [Usage](#usage)
5. [Available Scripts](#available-scripts)
6. [Directory Details](#directory-details)
7. [Contributing](#contributing)
8. [License](#license)

## Introduction

This template provides a robust starting point for building full-stack applications using Next.js, Prisma, tRPC, and Supabase. It's designed to enhance productivity and maintainability, offering a well-structured foundation for your projects.

## Project Structure

```bash
/
├── app/
│   ├── api/
│   │   └── trpc/
│   │       └── [trpc]/
│   │           └── route.ts
│   ├── layout.tsx
│   └── page.tsx
├── server/
│   ├── db.ts
│   ├── index.ts
│   └── trpc.ts
├── utils/
│   └── trpc/
│       ├── client.ts
│       └── Provider.tsx
├── components/
├── features/
├── hooks/
├── libs/
└── types/
```

## Installation

Clone the repository and install the dependencies:

```bash
git clone https://github.com/junya-thinkactive-d/nextjs-prisma-trpc-starter.git
cd nextjs-prisma-trpc-starter
pnpm install
```

## Usage

To start the development server:

```bash
pnpm dev
```

To build the project:

```bash
pnpm build
```

To start Storybook:

```bush
pnpm storybook
```

## Available Scripts

- `pnpm dev`: Starts the development server.
- `pnpm build`: Builds the application for production.
- `pnpm start`: Starts the production server.

## Directory Details

### `app` Directory

- **Purpose:** Contains the Next.js application pages and API routes.
- **Features:**
  - Includes the main layout (`layout.tsx`) and page components (`page.tsx`).
  - Houses the tRPC API route (`api/trpc/[trpc]/route.ts`).

### `server` Directory

- **Purpose:** Contains server-side logic and configurations.
- **Features:**
  - `db.ts`: Database connection and Prisma client setup.
  - `index.ts`: Server initialization and configuration.
  - `trpc.ts`: tRPC router and procedure definitions.

### `utils/trpc` Directory

- **Purpose:** Contains tRPC-related utilities.
- **Features:**
  - `client.ts`: tRPC client setup for frontend use.
  - `Provider.tsx`: React context provider for tRPC.

### `components` Directory

- **Purpose:** Contains reusable UI components.
- **Features:**
  - Might include common UI elements like buttons, inputs, modals, etc.

### `features` Directory

- **Purpose:** Groups code related to specific features or domains.
- **Features:**
  - Can contain feature-specific components, hooks, and utilities.

### `hooks` Directory

- **Purpose:** Contains custom React hooks.
- **Features:**
  - Reusable logic for state management and side effects.

### `libs` Directory

- **Purpose:** Houses integration with external services and APIs.
- **Features:**
  - Could include Supabase client setup and helper functions.

### `types` Directory

- **Purpose:** Stores TypeScript type definitions used throughout the project.
- **Features:**
  - Centralizes shared types and interfaces.

## Contributing

Contributions are welcome! Please read the contributing guidelines first.

## License

This project is licensed under the MIT License. See the LICENSE file for details.
