# Trip Planner (Minimal Travel UI)

A minimal, relaxed travel planning app built with Next.js and Tailwind CSS. Users can plan trips, view their saved trips, and enjoy a clean, modern, travel-inspired interface with a beautiful custom red theme (#A54141) and theme switching functionality.

## Features

### 🎨 Design & UI
- **Custom Red Theme**: Professional red color scheme using #A54141
- **Theme Switching**: Toggle between Light and Dark themes
- **Two-Tier Header**: Top bar with contact info and main navigation
- **Responsive Design**: Mobile-first approach with responsive components
- **Action Buttons**: Interactive buttons for "ติดต่อเรา", "สมัครสมาชิก", "เข้าสู่ระบบ"
- **Hero Section**: Engaging landing page with call-to-action buttons
- **Mobile Menu**: Hamburger menu for mobile devices with contact info
- **Dropdown Navigation**: Hover dropdown for additional information

### 🚀 Core Functionality
- **Trip Planning**: Create and manage travel itineraries
- **Trip Management**: View and organize saved trips
- **Modern UI**: Clean, intuitive interface with smooth animations
- **Theme Persistence**: Theme preference saved in localStorage

## Getting Started

### Environment Setup

Create a `.env.local` file in the root directory and configure your API settings:

```env
# API Configuration
NEXT_PUBLIC_API_BASE_URL=https://your-api-domain.com/api
NEXT_PUBLIC_API_TOKEN=your-api-token-here

# For Supabase Edge Functions (example):
# NEXT_PUBLIC_API_BASE_URL=https://your-project.supabase.co/functions/v1
# NEXT_PUBLIC_API_TOKEN=your-supabase-anon-key

# For local development:
# NEXT_PUBLIC_API_BASE_URL=http://localhost:3001/api
```

### Installation

First, install dependencies and run the development server:

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Components

### Header Components
- **Header**: Two-tier header with top bar and main navigation
- **ActionButtons**: Reusable component for header action buttons
- **MobileMenu**: Responsive mobile navigation with contact info
- **HeroActionButtons**: Larger buttons for hero section
- **ThemeToggle**: Theme switching button with icon and text support

### Theme Components
- **ThemeProvider**: Context provider for theme management
- **ThemeToggle**: Button component for switching themes
- **Theme Types**: Light and Dark themes

### Layout Components
- **Footer**: Site footer (to be implemented)
- **Layout**: Main app layout with providers

## User Flow

```mermaid
flowchart TD
<<<<<<< HEAD
<<<<<<< HEAD
    A[Home Page: Trip Planner] -->|Fill Form| B[Trip Plan Generation]
    B -->|Show Plan| A
    A -->|Click 'My Trip'| C[My Trip Page]
    C -->|View Trip Details| D[Trip Details Modal/Page]
    C -->|Back to Home| A
    A -->|View Contributors| E[Contributors Page]
    E -->|List Contributors| F[Contributor Cards]
=======
=======
>>>>>>> c5e93fbbda1bda30a2707ea5741ae46e7bc8c6ab
    A[Home Page: Hero Section] -->|Click Action Buttons| B[Sign Up/Login/Contact]
    A -->|Click 'วางแผนทริป'| C[Trip Planner Page]
    C -->|Fill Form| D[Trip Plan Generation]
    D -->|Show Plan| C
    A -->|Click 'ทริปของฉัน'| E[My Trip Page]
    E -->|View Trip Details| F[Trip Details Modal/Page]
    E -->|Back to Home| A
    A -->|Click Theme Button| G[Switch Theme]
    G -->|Light/Dark| A
<<<<<<< HEAD
>>>>>>> c5e93fb (create header)
=======
>>>>>>> c5e93fbbda1bda30a2707ea5741ae46e7bc8c6ab
    %% UI Section
    %% Backend (future): D
```

<<<<<<< HEAD
<<<<<<< HEAD
## Features

### Trip Planning
- Interactive trip planning form
- Save and view trip details
- Modern, responsive UI

### Contributors
- Dynamic contributor listing from `contribute/` directory
- Server-side file reading using Next.js server actions
- Responsive grid layout with contributor cards
- Automatic sorting and error handling
=======
=======
>>>>>>> c5e93fbbda1bda30a2707ea5741ae46e7bc8c6ab
## Color Scheme

The application uses a custom red theme with the following color palette:
- **Primary Red**: `#A54141` - Main brand color
- **Hover Red**: `#8B3636` - Interactive states (darker shade)
- **Light Red**: `#F5F0F0` - Background accents
- **Gradient Red**: `from-[#A54141] to-[#8B3636]` - CTA sections
- **Neutral**: Gray tones for text and borders
- **White**: Clean backgrounds and contrast

## Theme System

### Available Themes
1. **Light Theme**: Default theme with white background and dark text
2. **Dark Theme**: Dark background with light text and red accents

### Theme Features
- **Persistent Storage**: Theme preference saved in localStorage
- **Smooth Transitions**: CSS transitions for theme changes
- **Icon Indicators**: Different icons for each theme state
- **Mobile Support**: Theme toggle available in mobile menu

## Design Features

### Header Design
- **Top Bar**: Contact information and utility links
- **Main Header**: Logo, navigation, and action buttons
- **Hover Effects**: Subtle underline animations on navigation
- **Dropdown Menu**: Additional information with hover states
- **Mobile Responsive**: Collapsible menu with contact info
- **Theme Toggle**: Icon button for switching themes

### Button Styles
- **Primary**: #A54141 background with white text
- **Secondary**: #A54141 border with #A54141 text
- **Tertiary**: Text-only with hover effects
- **Consistent Spacing**: Uniform padding and margins
<<<<<<< HEAD
>>>>>>> c5e93fb (create header)
=======
>>>>>>> c5e93fbbda1bda30a2707ea5741ae46e7bc8c6ab

---

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
