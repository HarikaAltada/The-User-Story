# Babynama - Expert Parenting Guidance Platform

A modern Next.js application providing expert parenting guidance through live webinars and educational resources. Built with TypeScript, Tailwind CSS, and featuring a clean, responsive design optimized for busy parents.

## 🚀 Live Demo

**Live URL:** [https://the-user-story.vercel.app/](https://the-user-story.vercel.app/)

## ✨ Features

- **Live Webinars Page**: Browse upcoming expert-led sessions with pediatricians and child care specialists
- **Responsive Design**: Optimized for all devices from mobile to desktop
- **Interactive UI**: Hover effects, smooth transitions, and engaging micro-interactions
- **Category System**: Color-coded webinar categories for easy navigation
- **Expert Information**: Detailed speaker credentials and session information
- **Modern Stack**: Built with Next.js 14, TypeScript, and Tailwind CSS

## 🛠️ Technical Choices Made

**Component Architecture**: I chose to keep all webinar data and rendering logic within the main `/webinars/page.tsx` file rather than creating separate components because the webinar cards have consistent styling and behavior. This approach reduces complexity while maintaining clean, readable code. The mock data array is co-located with the component for easy maintenance and testing during development.

**Next.js App Router**: I implemented the new App Router instead of the Pages Router to take advantage of server-side rendering capabilities, improved performance, and better developer experience with the latest Next.js features.

## 🧩 Roadblock & Learning

**Challenge**: I initially struggled with implementing proper TypeScript interfaces for the webinar data structure while ensuring type safety across the component.

**Solution**: I had to look up the correct syntax for defining complex TypeScript interfaces in Next.js components. I solved this by:
1. Defining a clear `Webinar` interface with all required properties
2. Using proper typing for the mock data array: `const webinars: Webinar[] = [...]`
3. Ensuring type safety in the map function and event handlers

This taught me the importance of planning data structures upfront and leveraging TypeScript's type system for better code reliability.

## 🏗️ Project Structure

```
app/
├── components/
│   └── Navbar.tsx          # Navigation component with active states
├── webinars/
│   └── page.tsx            # Webinars listing page with mock data
├── globals.css             # Global styles and Tailwind imports
├── layout.tsx              # Root layout with navigation
└── page.tsx                # Home page with feature overview
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd babynama-nextjs
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📱 Pages

### Home Page (`/`)
- Welcome section with brand introduction
- Feature overview cards highlighting key services
- Call-to-action button directing to webinars

### Webinars Page (`/webinars`)
- Grid layout of upcoming webinar cards
- 15 mock webinars with realistic data
- Category-based color coding
- Interactive "View Details" buttons (console logging)
- Responsive design (1-2-3 column layout)

## 🎨 Design System

- **Colors**: Blue-focused palette with category-specific accent colors
- **Typography**: Inter font family for clean, readable text
- **Spacing**: Consistent 8px grid system
- **Components**: Card-based design with subtle shadows and hover effects
- **Responsive**: Mobile-first approach with Tailwind CSS breakpoints

## 🔧 Technologies Used

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Deployment**: Vercel

## 📊 Mock Data

The application includes 15 realistic webinar entries covering:
- Newborn Care
- Sleep & Development  
- Nutrition
- Health & Wellness
- Behavioral Health
- Safety
- Mental Health
- And more...

Each webinar includes:
- Expert speaker credentials
- Detailed descriptions
- Scheduling information
- Category classification
- Duration estimates

