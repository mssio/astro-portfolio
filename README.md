# Astro Portfolio Template

Personal portfolio template built with Astro, designed to be easy to customize and deploy.

## Installation

```bash
# Clone the repository
git clone https://github.com/elstron/astro-portfolio.git

# Install dependencies
pnpm install
```

## Commands

```bash
# Start development server on port 4321
pnpm dev

# Generate production build
pnpm build

# Preview production build
pnpm preview
```

## Customization

All portfolio content is managed through TypeScript files located in `src/data/`. Edit these files to customize your information:

### src/data/aboutMe.ts

Personal and contact information:

- `name`: Name and main title
- `profession`: Current profession
- `description`: Brief description
- `bio.paragraphs`: Array of paragraphs for the "About" section
- `profile.picture`: Profile image path (e.g. `/profile.png`)
- `profile.altText`: Alt text for the profile image
- `banner.image`: URL or path of the banner image
- `banner.altText`: Alt text for the banner image
- `contact.email`: Contact email address
- `socialMedia`: Links to social networks (e.g. LinkedIn, GitHub, X, website)

### src/data/experience.ts

Array of work experiences. Each entry contains:

- `company`: Company name
- `position`: Job title or position
- `duration`: Time period
- `responsibilities`: Array of responsibilities

### src/data/projects.ts

Array of projects. Each project includes:

- `title`: Project name
- `description`: Project description
- `image`: Project image URL
- `link`: Link to the project
- `stack`: Array of technologies used

### src/data/skills.ts

Array of technical skills with SVG icons. Add or remove skills by modifying this file. SVG icons are stored in `src/assets/icons/`.

## Architecture

```text
str-portfolio/
├── public/                    # Static files
│   ├── profile.png           # Profile image
│   └── screenshot_*.png      # Screenshots
├── src/
│   ├── Layouts/
│   │   └── Layout.astro      # Main layout with meta tags and HTML structure
│   ├── assets/
│   │   ├── icons/            # SVG icons for skills
│   │   └── social/           # Social network icons
│   ├── components/
│   │   ├── Experience/
│   │   │   └── ExperienceCard.astro    # Individual experience card
│   │   ├── projects/
│   │   │   └── ProjectCard.astro       # Individual project card
│   │   ├── sections/
│   │   │   ├── About.astro             # "About me" section
│   │   │   ├── Experience.astro        # Work experience section
│   │   │   ├── Hero.astro              # Hero section with banner and profile
│   │   │   ├── Projects.astro          # Projects section
│   │   │   └── Skills.astro            # Skills section
│   │   └── Footer.astro                # Site footer
│   ├── data/
│   │   ├── aboutMe.ts        # Personal data and contact
│   │   ├── experience.ts     # Work experience data
│   │   ├── projects.ts       # Projects data
│   │   └── skills.ts         # Technical skills data
│   ├── pages/
│   │   └── index.astro       # Main page composing all sections
│   └── styles.css            # Global styles with CSS variables
├── astro.config.mjs          # Astro configuration (server mode)
├── tsconfig.json             # TypeScript configuration
└── package.json              # Dependencies and scripts
```

### Data Flow

1. Data is defined in TypeScript files (`src/data/`)
2. Sections (`src/components/sections/`) import and consume this data
3. Card components (`ExperienceCard`, `ProjectCard`) render individual items
4. The main page (`src/pages/index.astro`) composes all sections
5. The Layout (`src/Layouts/Layout.astro`) provides the HTML structure and meta tags

### Styles

The project uses:
- CSS variables for automatic light/dark themes via `light-dark()`
- Scoped styles in Astro components
- `Roboto Mono Variable` font from Fontsource
- CSS Grid for main layout
- Customizable CSS variables in `styles.css`

### Rendering Mode

The project is configured in `server` mode (SSR) in `astro.config.mjs`. To generate a static site, change `output: 'server'` to `output: 'static'`.

## Technologies

- Astro 6.0.8
- TypeScript
- CSS with native variables
- Roboto Mono Variable font
- Prettier for code formatting

## License

ISC
