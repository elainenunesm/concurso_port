# AGENTS.md

## Project Overview
This is a static HTML dashboard for a Portuguese language learning platform. It displays user progress, modules, topics, and performance statistics in a clean, responsive interface.

## Key Files
- `oi.20.html` - Main application file with embedded CSS and JavaScript

## Technologies
- HTML5 with semantic markup
- CSS3 with custom properties (CSS variables) for design system
- Vanilla JavaScript for minimal interactivity
- Font Awesome 6.4.0 for icons
- Google Fonts (Inter) for typography

## How to Run
Open `oi.20.html` directly in any modern web browser. No build process or server required.

## Conventions
- **CSS**: Variables in `:root` for colors, shadows, radii. Organized sections with comments. BEM-like naming (kebab-case).
- **HTML**: Semantic elements (`<header>`, `<main>`, `<aside>`, `<section>`). Portuguese language (`lang="pt-BR"`).
- **JavaScript**: Minimal DOM manipulation, event listeners for user interactions.
- **Design**: Responsive grid layout (3-column), consistent spacing (24px gaps), purple primary color scheme.

## Architecture
- **Header**: Navigation with logo, progress bar, stats, user profile
- **Left Sidebar**: Module list with progress indicators and lock system
- **Center Panel**: Active module content with topic checklist
- **Right Sidebar**: Performance analytics and how-to guide

## Development Notes
- Static file - no dependencies or build tools needed
- CDN resources loaded externally (fonts, icons)
- CSS-only donut chart for performance visualization
- Sequential module unlocking system (complete one to unlock next)