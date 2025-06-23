# 📚 Smart Scholar


**Smart Scholar** is an AI-powered Learning Management System (LMS) and SaaS platform that allows users to interact with real-time voice-based companions for personalized education.

🔗 **Live Demo:** [saas-app-ranjithbabu0912s-projects.vercel.app](https://saas-app-ranjithbabu0912s-projects.vercel.app/)

---

## ✨ Features

- 🎙️ AI voice assistant for learning interactions
- 🔐 Clerk-based auth and subscription billing
- 📚 Course and content management system
- 📦 Supabase-powered backend
- ⚡ Voice interaction via Vapi
- 🎨 Fully responsive UI with Tailwind CSS

---

## 🧱 Tech Stack

| Tech             | Description                          |
|------------------|--------------------------------------|
| ![Next.js](https://img.shields.io/badge/Next.js-000?logo=nextdotjs) | React framework for SSR & routing |
| ![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?logo=typescript&logoColor=white) | Typed JS for robust development |
| ![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?logo=tailwindcss&logoColor=white) | Utility-first CSS styling        |
| ![Clerk](https://img.shields.io/badge/Clerk.dev-3B82F6?logo=clerk&logoColor=white) | Auth & billing integration       |
| ![Supabase](https://img.shields.io/badge/Supabase-3ECF8E?logo=supabase&logoColor=white) | Realtime database & backend      |
| ![Vapi](https://img.shields.io/badge/Vapi.ai-AI%20Voice-ff7f50) | AI voice assistant platform      |
| ![Vercel Deploy](https://vercel.com/button) |(https://saas-app-ranjithbabu0912s-projects.vercel.app/) |
| ![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)  |(#license)       |

---

## 📸 Screenshots

> Upload images to your GitHub repo (e.g., `/public/screenshots/`) and replace the links below.

| Dashboard View | AI Companion |
|----------------|--------------|
| ![Dashboard Screenshot](./public/screenshots/dashboard.png) | ![Voice Assistant Screenshot](./public/screenshots/ai-companion.png) |

You can also use external image hosting (like [Imgur](https://imgur.com/) or GitHub issues) for screenshots if needed.

---

## 📦 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/ranjithbabu0912/smart-scholar.git
cd smart-scholar
```

### Install Dependencies

```bash
npm install
# or
yarn install
```

### Configure Environment Variables 
Create a .env.local file and add the following:

```bash
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
CLERK_SECRET_KEY=your_clerk_secret_key

NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
SUPABASE_SERVICE_ROLE_KEY=your_service_role_key

NEXT_PUBLIC_VAPI_WEB_TOKEN=your_vapi_web_token
```

### Run the App

```bash
npm run dev
```

Open your browser at http://localhost:3000.


### 🙋‍♂️ Author
Ranjith Babu S
Web Developer



### 📄 License
This project is licensed under the MIT License.
You are free to use, modify, and distribute it with proper attribution.