# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

A Portuguese language learning platform prototype. The UI presents grammar topics organized into modules, with progress tracking, completion states, and performance metrics.

## Running the Project

No build process — open `index.html` directly in a browser. There are no dependencies to install, no server required, and no test suite.

## Architecture

The project is split into three files:

- [index.html](index.html) — markup only; links to external CSS and JS
- [css/styles.css](css/styles.css) — all styles, including the design system variables
- [js/main.js](js/main.js) — minimal interactivity (unlock button feedback)

**Layout:** Three-panel design — left sidebar (module navigation), center panel (quiz content), right sidebar (performance metrics). Panels use CSS Grid. The page scrolls naturally; the header is `position: sticky`, and both sidebars are `position: sticky` with `max-height + overflow-y: auto` so they stay visible while the center panel grows with content.

**Design system:** All colors, spacing, and visual tokens are defined as CSS custom properties on `:root`. Prefer modifying these variables over hardcoding values.

**State representation:** UI states (locked, completed, in-progress) are expressed purely through CSS classes on elements — there is no JavaScript state management. Interactivity is limited to a single unlock-button animation function.

**Content:** All module and topic content is hard-coded in HTML. The platform is a static mockup with no backend, API, or data persistence layer.
