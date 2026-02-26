# WorkoutWise 💪

Welcome to **WorkoutWise**, a premium and interactive fitness web application built to help you track and elevate your fitness journey. Designed with modern web technologies, WorkoutWise offers a seamless experience with features like exploring workout routines and calculating vital fitness metrics.

---

## ✨ Key Features

- **🏠 Interactive Home Page**: Engaging hero banner, overview of offerings, highlighted fitness routines, and a motivating call-to-action section.
- **🏋️‍♂️ Dedicated Workouts Page**: Dive deep into an array of workout plans, fitness tips, and specific exercise guidance.
- **🧮 Smart Calculators**: Features a built-in **BMI Calculator** and **Maintenance Calories Calculator** so users can seamlessly track their personal metrics without leaving the app.
- **📱 Responsive & Premium Design**: Built with smooth animations, optimal alignment, and a dark-mode inspired glassmorphism aesthetic that feels vibrant and polished on all devices.
- **⚡ Lightning Fast Navigation**: Utilizes React Router DOM for instant and smooth client-side page transitions.

## 🛠️ Tech Stack

WorkoutWise is powered by a modern, high-performance web development stack:

- **Frontend Core**: React 19
- **Routing**: React Router DOM (v7)
- **Styling**: Vanilla CSS (Custom flexbox/grid layouts, animations, and premium dark mode aesthetics)
- **Build Tool**: Vite (Extremely fast HMR and optimized production builds)
- **Linting**: ESLint for clean, error-free code

## 🚀 Getting Started

Follow these steps to set up the project locally on your machine.

### Prerequisites

Ensure you have [Node.js](https://nodejs.org/) installed.

### Installation & Setup

1. **Clone the repository** (if you haven't already):
   ```bash
   git clone <repository-url>
   ```

2. **Navigate into the project directory**:
   ```bash
   cd WorkwoutWise
   ```

3. **Install the required dependencies**:
   ```bash
   npm install
   ```

4. **Start the development server**:
   ```bash
   npm run dev
   ```

5. **View the App**: Open your browser and navigate to `http://localhost:5173` to see WorkoutWise live!

## 📂 Project Structure

Here's a quick overview of how the codebase is organized:

```text
src/
├── assets/          # Static assets (images, icons, etc.)
├── components/      # Reusable UI components
│   ├── Navbar, Footer, HeroSlider
│   ├── BMICalculator, WhatWeOffer
│   └── StartSection, WorkoutHighlight
├── pages/           # Route-level components
│   ├── Home.jsx     # Main landing page
│   └── Workouts.jsx # Workouts browsing page
├── App.jsx          # Main application component & routes setup
├── App.css          # Global application styles
└── main.jsx         # React DOM rendering entry point
```

## 📜 Available Scripts

In the project directory, you can run:

- `npm run dev`: Starts the Vite development server.
- `npm run build`: Bundles the application for production into the `dist` folder.
- `npm run preview`: Bootstraps a local web server to preview the production build.
- `npm run lint`: Analyzes the code to find and fix styling or syntax issues.

---
Built with ❤️ using React & Vite. Elevate your fitness digitally.

