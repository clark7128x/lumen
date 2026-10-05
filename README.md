# Lumen

Mobile-first landing page showcasing four fictional AI bloggers with interactive profiles, a simulated chat interface, and Telegram integration.

## Overview

Lumen is a single-page prototype built to demonstrate how AI personas could be presented to users before they engage with a Telegram bot. Each "blogger" has a profile with posts, a scripted chat demo, and a CTA that routes to a real Telegram bot with a `?start=creator_<id>` parameter for attribution.

**Note:** All creators, posts, and chat responses on this page are fictional and generated for demonstration purposes.

## Features

- **Creator catalog** with horizontal scroll-snap on mobile and a 4-column grid on desktop
- **Interactive profiles** via native `<dialog>` with swipe-to-close on mobile and arrow navigation on desktop
- **Posts tab** showing a mixed feed of image and text posts with a detail view
- **Chat tab** with greeting, scripted Q&A chips, typing indicator, and a fallback CTA to Telegram
- **Hash-based routing** (`/#/dan`, `/#/leo`, etc.) for deep-linking to individual profiles
- **Theme switching** (system / light / dark) with `localStorage` persistence and `prefers-color-scheme` support
- **Event tracking** stub (console in dev, `dataLayer` in production)
- Fully responsive, keyboard-accessible, respects `prefers-reduced-motion`

## Tech Stack

- React 18 + TypeScript
- Vite 6
- Tailwind CSS 3.4
- Native browser APIs (no UI libraries for dialogs, routing, or swipe)

## Prerequisites

- Node.js 18+
- npm 9+

## Getting Started

```bash
# Clone the repository
git clone <repo-url>
cd Lumen

# Install dependencies
npm install

# Start the development server (opens http://localhost:3000)
npm run dev