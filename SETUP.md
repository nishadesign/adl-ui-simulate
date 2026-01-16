# Agentforce Data Library - Local Setup Guide

## Prerequisites

- Node.js (v16 or higher)
- npm or yarn

## Installation Steps

1. **Install Dependencies**
   ```bash
   cd "/Users/nisha.rastogi/Documents/Cursor Projects/adl-ui-simulate/adl-ui-simulate"
   npm install
   ```

2. **Start Development Server**
   ```bash
   npm run dev
   ```

3. **Open in Browser**
   - The site will be available at: **http://localhost:3000**
   - You should see the Data Library Home page

## What You'll See

The app includes a demo navigation helper in the bottom-right corner with three buttons:

- **Home** - Shows the Data Library Home page (table view)
- **Detail** - Shows the Detail page for "Honda Manual Docs"
- **Open Modal** - Opens the "Create a Library" modal

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Project Structure

```
src/
├── components/         # All React components
│   ├── shared/        # Reusable components (Button, Input, etc.)
│   ├── layout/        # Layout components (Header, Navigation, Tree)
│   └── data-library/  # Data Library specific components
├── pages/             # Page-level components
├── types/             # TypeScript type definitions
├── App.tsx           # Main app with demo navigation
└── main.tsx          # React entry point
```

## Design Fidelity

All components match the Figma designs exactly:
- ✅ Data Library Home page
- ✅ Create Library modal
- ✅ Data Library Detail page

## Notes

- This is a **component stub implementation** with no backend
- All data is **placeholder/mock data**
- The UI matches the Figma designs 1:1
- Icons use SVG sprite references (placeholders)

## Next Steps

To make this production-ready:
1. Add state management
2. Connect to backend APIs
3. Add routing (React Router)
4. Implement actual icon assets
5. Add form validation
6. Add error handling
