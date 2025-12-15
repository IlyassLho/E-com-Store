## E‑Commerce Store

A modern, single‑page e‑commerce landing and product site built with React and Vite.  
It includes product galleries, detailed product pages, an order form, and policy pages, with a focus on conversion and mobile responsiveness.

## Features

- **Product catalog & details**: Browse all products and view dedicated product detail pages with images and descriptions.
- **Order form**: Simple checkout flow for submitting orders.
- **Responsive layout**: Optimized for mobile, tablet, and desktop.
- **Trust & features sections**: `TrustBanner` and `FeaturesSection` to highlight guarantees and benefits.
- **WhatsApp integration**: Floating `WhatsAppButton` for direct contact.
- **Scroll utilities**: `ScrollToTop` button and `ScrollToTopOnNavigate` for better UX in a SPA.
- **Routing**: Multiple pages (home, product details, about, policies, thank‑you, 404) handled via React Router.

## Tech Stack

- **Framework**: React (`react`, `react-dom`)
- **Bundler / Dev server**: Vite
- **Routing**: `react-router-dom`
- **UI helpers**: `react-icons`, `react-responsive-carousel`
- **Analytics**: `react-facebook-pixel`
- **Linting**: ESLint with React and Vite configuration

## Project Structure

```text
src/
├── components/
│   ├── Header/                 # Site header & navigation
│   ├── Footer/                 # Footer with links / info
│   ├── FeaturesSection/        # Features / benefits section
│   ├── TrustBanner/            # Trust badges / guarantees
│   ├── WhatsAppButton/         # Floating WhatsApp contact button
│   ├── ScrollToTop/            # Scroll-to-top UI
│   └── ScrollToTopOnNavigate.jsx  # Scroll to top on route change
├── pages/
│   ├── Home/                   # Main landing page
│   ├── ProductDetails/         # Single product detail page
│   ├── AboutUs/                # About page
│   ├── PolicyShipping/         # Shipping policy page
│   ├── PolicyReturn/           # Return policy page
│   ├── ThankYou/               # Post‑order confirmation page
│   ├── NotFound/               # 404 page
│   └── GenericPage.css         # Shared styling for simple pages
├── OrderForm.jsx               # Order / checkout form
├── App.jsx                     # Root app with routes
├── main.jsx                    # Vite entry point
└── products.js                 # Product data
```

Public assets (images, logo, WhatsApp icon, etc.) live under `public/`.

## Getting Started

### Prerequisites

- **Node.js**: v18 or higher recommended
- **Package manager**: npm (comes with Node)

### Clone the repository:
```bash
git clone https://github.com/IlyassLho/E-com-Store.git
cd E-com-Store
```

### Installation
```bash
npm install
```

### Development

Start the Vite dev server:

```bash
npm run dev
```

By default the app runs on `http://localhost:5173` (Vite’s default port).

### Build

Create an optimized production build:

```bash
npm run build
```

## Pages & Components Overview

- **Home page (`pages/Home`)**: Hero section and product showcase.
- **Product details (`pages/ProductDetails`)**: Full info for a single product.
- **Order form (`OrderForm.jsx`)**: Handles order submission.
- **About & policies (`pages/AboutUs`, `pages/PolicyShipping`, `pages/PolicyReturn`)**: Static info pages.
- **Thank you (`pages/ThankYou`)**: Displayed after a successful order.
- **404 (`pages/NotFound`)**: Fallback for unknown routes.
- **Global UI components**: `Header`, `Footer`, `WhatsAppButton`, `TrustBanner`, `FeaturesSection`, `ScrollToTop`.

## Deployment

This project is SPA‑ready for static hosting (e.g. Netlify, Vercel).  
The `public/_redirects` file is configured so that all routes serve `index.html`, which is required for React Router in production.
