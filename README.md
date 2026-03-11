# CodeSync

**Real-time Collaborative Code Editor** — Code together, in sync, from anywhere.

CodeSync is a modern collaborative code editor that allows multiple developers to write and edit code simultaneously in real-time. Built with Next.js, Yjs, CodeMirror, and Liveblocks.

![Next.js](https://img.shields.io/badge/Next.js-16.1.1-black?style=flat-square&logo=next.js)
![React](https://img.shields.io/badge/React-19.2.3-61DAFB?style=flat-square&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-3178C6?style=flat-square&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.0-06B6D4?style=flat-square&logo=tailwindcss)

---

## Features

- **Real-time Collaboration** — Multiple users can edit the same code simultaneously
- **Live Cursors** — See where other collaborators are typing in real-time
- **User Presence** — View avatars of all connected users
- **Undo/Redo** — Individual undo/redo history for each user
- **Syntax Highlighting** — JavaScript/TypeScript syntax highlighting with CodeMirror
- **Instant Sync** — Changes appear instantly across all connected clients
- **Conflict-Free** — Built on Yjs CRDT for seamless conflict resolution

---

## Tech Stack

| Technology | Purpose |
|------------|---------|
| [Next.js 16](https://nextjs.org/) | React framework with App Router |
| [React 19](https://react.dev/) | UI library |
| [TypeScript](https://www.typescriptlang.org/) | Type safety |
| [Tailwind CSS 4](https://tailwindcss.com/) | Styling |
| [CodeMirror 6](https://codemirror.net/) | Code editor |
| [Yjs](https://yjs.dev/) | CRDT for real-time sync |
| [Liveblocks](https://liveblocks.io/) | Real-time infrastructure |

---

##Getting Started

### Prerequisites

- Node.js 18+ 
- npm, yarn, pnpm, or bun
- Liveblocks account (free tier available)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Saurabh-1785/CodeSync.git
   cd CodeSync
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   
   Create a `.env.local` file in the root directory:
   ```env
   LIVEBLOCKS_SECRET_KEY=sk_your_secret_key_here
   ```
   
   > Get your secret key from [Liveblocks Dashboard](https://liveblocks.io/dashboard/apikeys)

4. **Run the development server**
   ```bash
   npm run dev
   ```

5. **Open in browser**
   
   Navigate to [http://localhost:3000](http://localhost:3000)

---

## Testing Collaboration

To test real-time collaboration:

1. Open `http://localhost:3000` in **multiple browser tabs**
2. Start typing in one tab
3. Watch the changes appear instantly in other tabs!

Each tab simulates a different user with their own cursor and avatar.

---

## Project Structure

```
codesync/
├── src/
│   ├── app/
│   │   ├── api/
│   │   │   └── liveblocks-auth/    # Authentication endpoint
│   │   │       └── route.ts
│   │   ├── layout.tsx              # Root layout
│   │   ├── page.tsx                # Home page
│   │   ├── Providers.tsx           # Liveblocks provider
│   │   └── Room.tsx                # Room context wrapper
│   ├── components/
│   │   ├── Avatars.tsx             # User avatars display
│   │   ├── CollaborativeEditor.tsx # Main editor component
│   │   ├── Loading.tsx             # Loading spinner
│   │   └── Toolbar.tsx             # Undo/Redo toolbar
│   ├── globals.css                 # Global styles + Tailwind
│   └── liveblocks.config.ts        # Liveblocks type definitions
├── public/                         # Static assets
├── .env.local                      # Environment variables (create this)
└── package.json
```

---

## Default Users

The app includes 7 preset user profiles for testing:

| Name | Color |
|------|-------|
| Saurabh | 🟣 Purple |
| Priya | 🔴 Red |
| Yogita | 🟡 Yellow |
| Yashwin | 🟢 Teal |
| Himanshu | 🔵 Blue |
| Vyom | 🟣 Indigo |
| Saksham | 🔵 Cyan |

Users are randomly assigned when connecting. To customize, edit `src/app/api/liveblocks-auth/route.ts`.

---

## 🔧 Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run start` | Start production server |
| `npm run lint` | Run ESLint |

---
