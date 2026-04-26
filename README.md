# 🎨 OneUI (@vskdev/web-oneui)

**A premium React component library built with Tailwind CSS and Shadcn UI primitives.**

OneUI is a high-performance, accessible, and beautifully designed UI library created for private internal projects. It leverages the power of Radix UI and Tailwind CSS to provide a professional foundation for modern web applications.

---

## 🚀 Quick Start

### Installation

```bash
npm install @vskdev/web-oneui
```

### Setup Tailwind CSS

Since OneUI uses Tailwind CSS, you need to include the library's styles in your project. Add the following to your main CSS entry point (e.g., `index.css`):

```css
@import "@vskdev/web-oneui/dist/oneui.css";
```

Update your `tailwind.config.js` to include the library's components:

```javascript
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./node_modules/@vskdev/web-oneui/dist/**/*.{js,ts,jsx,tsx}",
    // ... your project paths
  ],
  // ... rest of your config
}
```

---

## 🛠️ Usage

### Button Component

The Button component supports multiple variants, sizes, and states.

```tsx
import { Button } from '@vskdev/web-oneui';

export default function App() {
  return (
    <div className="flex gap-4">
      <Button variant="default">Primary Action</Button>
      <Button variant="outline" loading>Processing...</Button>
      <Button variant="destructive" size="sm">Delete</Button>
    </div>
  );
}
```

#### Props

| Prop | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `variant` | `default \| destructive \| outline \| secondary \| ghost \| link` | `default` | Visual style |
| `size` | `default \| sm \| lg \| icon` | `default` | Component size |
| `loading` | `boolean` | `false` | Shows spinner and disables interaction |
| `icon` | `ReactNode` | - | Optional icon before text |
| `asChild` | `boolean` | `false` | Change rendered element |

---

## 🏛️ Project Status

- **Status**: Private Repository
- **Owner**: siva krishna vegi
- **Tech Stack**: React, TypeScript, Tailwind CSS, Radix UI (Shadcn-based)

---

## 📄 License

Internal use only. All rights reserved.
