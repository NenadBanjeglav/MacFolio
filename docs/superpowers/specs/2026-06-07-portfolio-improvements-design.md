# Portfolio Improvements Design

Date: 2026-06-07

## Goal

Improve `nenaddevelops.com` as a recruiter-first portfolio while preserving the full macOS-inspired experience. The site should still feel like an operating system: desktop wallpaper, menu bar, dock, folders, draggable windows, file previews, and iOS-style mobile launcher. The improvements should make the strongest proof easier to find, improve mobile clarity, fix layout fragility, and reduce initial-load weight.

Primary audience: recruiters and hiring managers for frontend/full-stack roles.

Secondary audience: freelance or client leads evaluating whether Nenad can ship polished websites and product UI.

## Approved Approach

Use the focused OS polish approach:

- Keep the current macOS desktop metaphor as the core experience.
- Do not auto-open a dashboard or conventional landing section on desktop.
- Add a clear `Start Here` cue that behaves like an OS file or app.
- Make mobile a clearer iOS-style launcher, led by `Start Here`.
- Turn project folders into concise proof-oriented case studies.
- Keep testimonials as file-like image proof, not testimonial cards.
- Improve metadata, image payload, and PDF viewer loading without introducing a routing system, CMS, backend, or broad refactor.

## Core Experience

Desktop opens as a clean macOS-style desktop. The hero text remains the first visual signal: Nenad's name and role over the wallpaper. Existing desktop project folders remain visible and draggable/openable.

A new `Start Here.txt` cue appears on the desktop in a way that fits the OS metaphor. It is placed near the desktop content cluster and opens a concise recruiter-first proof file, not a marketing panel.

Mobile keeps the iOS launcher idea. The first mobile screen becomes intentionally useful:

- A prominent `Start Here` app/card appears first.
- The launcher also includes labeled entries for Portfolio, Resume, Contact, Skills, and Testimonials.
- Ordering follows recruiter flow: Start Here, Portfolio, Resume, Contact, Skills, Testimonials.
- Icons must have readable labels so visitors do not have to infer the meaning of each app.

## Content Structure

The `Start Here` proof content should include:

- Full-stack Product Engineer.
- Current production work at GreenState / ClickMind.
- Production React and TypeScript product work for 20k+ active users across Europe.
- API-integrated product flows, validation, loading states, error states, QA follow-up, and release monitoring.
- Stripe Checkout implementation across checkout UX and API integration path.
- Frontend testing introduced from zero coverage with Vitest, React Testing Library, MSW, and Playwright.
- Design-system migration work from Styled Components and Storybook 8 toward Radix UI, Tailwind CSS, and Storybook 10.
- AI-assisted engineering workflows and team workshops.
- Short actions: open Portfolio, view Resume, and Contact.

Each project folder gets one concise case-study text file, plus screenshot and live link where applicable. The case-study file uses this structure:

```text
Role
What I Built
Tech Stack
Product / Business Value
Result or Current Status
```

GreenState / ClickMind is positioned as the strongest production product experience. Mobile Product Lab is positioned as proof of React Native / Expo product ownership. Website projects remain concise and focused on business outcome, build quality, CMS/content value, and responsive UI.

Testimonials stay file-like in the Testimonials/Safari window. Do not replace them with quote cards. Preserve the existing file-grid behavior and image-proof opening flow.

## Architecture

Keep the existing React/Vite architecture.

Expected source areas:

- `src/constants/index.js`: structured content for `Start Here`, project case studies, and mobile app ordering.
- `src/components/Home.jsx`: desktop `Start Here` desktop item and project folder behavior.
- `src/components/mobile/Home.jsx`: iOS-style mobile launcher with prominent `Start Here` and labeled apps.
- `src/windows/Finder.jsx`: stable grid layout for Finder content so item names cannot collide.
- `src/windows/Text.jsx` and mobile text-file components: support the case-study content shape and proof file content.
- `src/windows/Resume.jsx` and window exports/app composition: lazy-load PDF-related code so resume rendering is only initialized when the Resume window opens.
- `index.html`: stronger title, canonical URL, Open Graph/Twitter metadata, and share image metadata.
- `public/images`: compressed or converted image assets, especially wallpaper and large project screenshots.

No new framework, router, backend, database, CMS, or global state library is required.

## Component Behavior

### Start Here

`Start Here` should open a text-style window on desktop and a full-screen mobile text-style window on mobile. It should use existing window/store patterns rather than special-case routing.

The content should be scannable. It can use headings, short paragraphs, and action-like rows as long as it still feels like a file viewed inside the OS.

### Finder

Finder content should move away from fragile absolute item positions for the main grid. Use a stable grid or equivalent layout inside the content area so folder/file labels do not overlap at desktop sizes.

Draggability can remain for desktop items where it does not break layout. If drag behavior conflicts with the grid, prioritize readability and predictable opening over freeform dragging inside Finder.

### Mobile Launcher

Mobile first screen should not feel like a blank phone with two unexplained icons. It should present a clear launcher with:

- a prominent `Start Here` entry,
- labeled app icons,
- consistent tap targets,
- no text overflow,
- no overlap with the mobile status/dynamic-island styling or bottom dock.

### Project Case Studies

Case-study files should be concise, not long articles. The goal is fast recruiter comprehension.

Each project folder should keep existing assets:

- one case-study text file,
- one screenshot where available,
- one live URL file where available.

### Testimonials

Testimonials continue to look like files in a directory. Opening a testimonial still opens the image proof.

## Data Flow

Existing Zustand window and location stores remain the interaction backbone.

- Desktop items call existing `openWindow` and `setActiveLocation` flows.
- Finder uses `locations` data to render folders/files.
- Text windows read the active window data and render text-file content.
- Mobile Finder uses the same `locations` source as desktop Finder.
- Mobile launcher entries call `openWindow` for the relevant windows.

New or adjusted content should be represented as structured data in constants, not hardcoded across multiple components.

## Performance

Performance work prioritizes mobile first-load.

Required optimizations:

- Compress or convert `wallpaper.png` and large project screenshots to lighter formats where visual quality remains acceptable.
- Use stable image sizing through explicit dimensions, CSS aspect ratios, or fixed icon dimensions.
- Lazy-load Resume/PDF viewer code and avoid initializing PDF.js before the Resume window is opened.
- Avoid adding new startup-heavy dependencies.
- Keep Vite build output clean where practical; reducing the initial app chunk is more important than eliminating every warning.

## Error Handling

Resume keeps a visible fallback state with a direct download link if PDF rendering fails.

External links open in a new tab with `noopener noreferrer`.

Image-based windows should retain meaningful alt text. If an image fails to load, the surrounding window should not break the rest of the portfolio.

## SEO And Sharing

Improve `index.html` metadata:

- More specific title for recruiter/client search context.
- More specific description focused on React, TypeScript, production product work, testing, and portfolio projects.
- Canonical URL for `https://www.nenaddevelops.com/`.
- Open Graph title, description, type, URL, and image.
- Twitter card metadata.

The metadata should help when sharing on LinkedIn, resumes, and direct messages.

## Verification

After implementation:

- Run `npm run build`.
- Run `npm run lint` if the existing lint setup supports it cleanly.
- Check desktop first screen, Finder, Start Here, Contact, Skills, Resume, and Testimonials.
- Check mobile first screen, Start Here, Portfolio/Finder, Contact, Resume, and bottom dock.
- Capture or inspect desktop and mobile screenshots.
- Re-run Lighthouse-style checks if tooling/network access allows. Otherwise verify bundle output, image sizes, and manual first-load behavior.

## Non-Goals

- No conventional landing page replacement.
- No auto-open dashboard on desktop.
- No testimonial cards.
- No backend, CMS, analytics, or form submission system.
- No broad visual redesign away from macOS/iOS metaphors.
- No deep case-study article system.
