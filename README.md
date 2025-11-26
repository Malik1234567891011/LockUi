# Lockscape

An interactive lock screen animation that transitions into a beautiful paradise scene with water effects, animated grass, floating clouds, and a clickable bird.

## What is this?

Lockscape is a web-based interactive experience that starts with a simple lock icon. When you hover over the lock, it animates and unlocks, taking you through a tunnel transition into a serene paradise scene featuring:

- **Animated lock unlock sequence** - Hover over the lock to see it unlock and fade away
- **Tunnel transition effect** - A mesmerizing tunnel animation between scenes
- **Paradise scene** - A beautiful landscape with:
  - Animated water overlay using Three.js
  - Floating clouds drifting across the sky
  - Animated grass field with hundreds of swaying blades
  - A tree with a clickable bird that flies away when clicked
  - Ambient particle effects

## Technologies Used

- **Vite** - Build tool and dev server
- **GSAP** - Animation library for smooth transitions
- **Three.js** - 3D graphics for the water effect
- **three-stdlib** - Three.js utilities
- **Vanilla JavaScript** - Core functionality
- **CSS3** - Styling and animations

## Setup Instructions

### Prerequisites

Make sure you have [Node.js](https://nodejs.org/) installed on your system (version 14 or higher recommended).

### Installation

1. **Clone or download this repository**

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   
   The dev server will start and display a local URL (typically `http://localhost:5173`). Open this URL in your browser.

   ⚠️ **Important:** Do NOT open the `index.html` file directly in your browser. This project uses ES modules and requires the Vite dev server to work properly.

### Available Scripts

- `npm run dev` - Start the development server with hot reload
- `npm run build` - Build the project for production
- `npm run preview` - Preview the production build locally

## How to Use

1. **View the lock screen** - When you first load the page, you'll see a black screen with a glowing white lock icon in the center.

2. **Unlock** - Hover your mouse over the lock icon to trigger the unlock animation.

3. **Watch the transition** - The lock will animate, fade away, and you'll be taken through a tunnel effect.

4. **Explore the paradise** - Once in the paradise scene, you can:
   - Watch the animated water effect
   - See the grass swaying in the wind
   - Click on the bird to make it fly away

## Project Structure

```
LockUi/
├── index.html          # Main HTML file
├── package.json        # Dependencies and scripts
├── public/            # Static assets (images)
│   ├── lock.png
│   └── vite.svg
└── src/
    ├── main.js        # Main application logic
    ├── water-scence.js # Three.js water scene setup
    ├── style.css      # All styles and animations
    └── counter.js     # (Unused utility)
```

## Troubleshooting

**Nothing appears when I open the page:**
- Make sure you're using `npm run dev` and opening the URL shown in the terminal, not opening the HTML file directly
- Check that all dependencies are installed with `npm install`
- Open the browser console (F12) to check for any error messages

**Animations not working:**
- Ensure you're hovering over the lock icon (not just the background)
- Check that GSAP is properly installed
- Verify the browser console for any JavaScript errors

**Water effect not showing:**
- The water effect loads after the tunnel transition
- Make sure Three.js dependencies are installed
- Check browser console for WebGL errors (some older browsers may not support it)

## License

This project is private and for personal use.

