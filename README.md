# Interactive Portfolio & CMS Studio

A modern, high-performance developer portfolio and content management system built with **React 19**, **Vite 8**, **React Router v7**, and **Lucide React**. 

Featuring dynamic case study rendering, a live floating CMS studio drawer, a dedicated full-page admin dashboard, local storage persistence, and full JSON import/export capabilities.

---

## 🌟 Key Features

- **Dynamic Case Studies**: Deep-dive project pages driven by structured content blocks (Text, Images, Image Galleries, Key Metrics, Pull Quotes, Testimonials, and Section Dividers).
- **Live Floating CMS Studio Drawer**: Toggable bottom-right overlay (`CMSDrawer`) that allows on-the-fly live updates to profile data, project details, categories, social links, and layout content directly while browsing the live site.
- **Dedicated CMS Admin Dashboard (`/admin`, `/cms`)**: Full-screen administration console for managing database records, block-by-block case study builders, and data management.
- **Client-Side Data Persistence & JSON Management**:
  - Automatically syncs all edits to `localStorage`.
  - Export entire portfolio database to `.json` backup files.
  - Import existing `.json` portfolio configurations.
  - One-click reset option to revert back to default dataset.
- **Responsive & Modern Styling**: Built with custom CSS design tokens, smooth micro-interactions, responsive grid/flexbox layouts, floating table of contents, and lightbox modal image viewers.
- **Fast Linting & Tooling**: Configured with **Oxlint** for lightning-fast JavaScript and React code analysis.

---

## 🛠️ Tech Stack

| Layer | Technology |
| :--- | :--- |
| **UI Framework** | [React 19](https://react.dev/) |
| **Build Tooling & Server** | [Vite 8](https://vitejs.dev/) |
| **Routing** | [React Router v7](https://reactrouter.com/) |
| **Icons** | [Lucide React](https://lucide.dev/) |
| **Linter** | [Oxlint](https://oxc.rs/docs/guide/usage/linter.html) |
| **Styling** | Vanilla CSS (CSS Design Tokens, Responsive Grids) |

---

## 📁 Directory Structure

```text
PF/
├── public/                     # Static assets & icons
├── src/
│   ├── assets/                 # Project images & branding assets
│   ├── cms/
│   │   ├── CmsContext.jsx      # React Context for global state, storage, & CRUD operations
│   │   └── defaultData.js      # Seed dataset for portfolio profile, projects, and blocks
│   ├── components/
│   │   ├── CaseStudy/          # Renderers for case study pages & content blocks
│   │   │   ├── CaseStudyHeader.jsx
│   │   │   ├── CaseStudyNav.jsx
│   │   │   ├── DividerBlock.jsx
│   │   │   ├── GalleryBlock.jsx
│   │   │   ├── ImageBlock.jsx
│   │   │   ├── MetricBlock.jsx
│   │   │   ├── QuoteBlock.jsx
│   │   │   ├── SectionRenderer.jsx
│   │   │   ├── TableOfContents.jsx
│   │   │   ├── TestimonialBlock.jsx
│   │   │   └── TextBlock.jsx
│   │   ├── CMSAdmin/           # Live CMS editors & drawer components
│   │   │   ├── AboutEditor.jsx
│   │   │   ├── CMSDrawer.jsx
│   │   │   ├── ConnectEditor.jsx
│   │   │   ├── DataEditor.jsx
│   │   │   ├── FooterEditor.jsx
│   │   │   ├── ProfileEditor.jsx
│   │   │   ├── ProjectBlockEditor.jsx
│   │   │   └── ProjectsEditor.jsx
│   │   ├── Footer/             # Global Footer component
│   │   ├── Header/             # Sticky top navigation bar
│   │   ├── ProjectList/        # Filterable project grid & card components
│   │   └── UI/                 # UI primitives (e.g. Lightbox ImageViewerModal)
│   ├── pages/
│   │   ├── CaseStudy.jsx       # Dynamic route component (/work/:slug)
│   │   ├── CMSPage.jsx         # Full-screen Admin Dashboard page (/cms, /admin)
│   │   ├── Home.jsx            # Main portfolio landing page (/)
│   │   └── NotFound.jsx        # 404 page handler
│   ├── styles/
│   │   ├── cms-editor.css      # Styling rules for CMS Drawer & Admin Editors
│   │   └── index.css           # Global CSS variables, reset, typography, and site styles
│   ├── utils/
│   │   └── textParser.jsx      # Markdown/formatting helper for text content
│   ├── App.jsx                 # Main entry point with route declarations & CMS provider
│   └── main.jsx                # React DOM render mounting point
├── package.json
├── vite.config.js
├── .oxlintrc.json
└── README.md
```

---

## 🚦 Routes & Navigation

| Route | Page / View | Description |
| :--- | :--- | :--- |
| `/` | `Home.jsx` | Portfolio homepage with Hero section, Project Grid, About, and Contact modal |
| `/work/:slug` | `CaseStudy.jsx` | Individual project case study view powered by content block renderers |
| `/admin`, `/cms` | `CMSPage.jsx` | Dedicated CMS management interface for full data & project block control |
| `*` | `NotFound.jsx` | Fallback page for non-existent routes |

*Note: The **CMS Live Studio Drawer** (`CMSDrawer`) is accessible globally across all routes via a floating button in the bottom right corner.*

---

## 🧩 Case Study Block Schema

The CMS powers case studies through modular block structures within sections:

```json
{
  "id": "project-slug",
  "title": "Project Title",
  "category": "Web Application",
  "description": "Short overview description",
  "heroImage": "https://example.com/image.png",
  "sections": [
    {
      "id": "section-1",
      "title": "Overview",
      "blocks": [
        { "id": "b1", "type": "text", "content": "Paragraph text with **markdown** support." },
        { "id": "b2", "type": "image", "url": "https://...", "caption": "Image caption" },
        { "id": "b3", "type": "gallery", "images": [{ "url": "...", "caption": "..." }] },
        { "id": "b4", "type": "metric", "value": "+140%", "label": "Conversion Rate Increase" },
        { "id": "b5", "type": "quote", "text": "Pull quote text", "author": "Author Name" },
        { "id": "b6", "type": "testimonial", "quote": "...", "name": "...", "role": "..." },
        { "id": "b7", "type": "divider" }
      ]
    }
  ]
}
```

---

## 🚀 Getting Started

### Prerequisites

Ensure you have [Node.js](https://nodejs.org/) (version 18+ recommended) installed on your system.

### Installation

1. Clone or navigate into the repository:
   ```bash
   cd PF
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

### Development Server

Start the local development server with Vite:

```bash
npm run dev
```

Open your browser and navigate to `http://localhost:5173`.

### Production Build

Build the optimized application bundle for production:

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

### Code Linting

Run Oxlint to perform linting checks across JavaScript and JSX files:

```bash
npm run lint
```

---

## 💾 Managing Portfolio Data

1. **Via UI (Live Studio)**:
   - Click the floating gear/pencil icon in the bottom right of any page to open the **CMS Studio Drawer**.
   - Navigate tabs to edit **Profile**, **Projects**, **About**, **Connect Links**, and **Footer**.
2. **Via Full Admin Page**:
   - Go to `/admin` or `/cms` in your browser.
   - Use the block editor to reorder, add, or edit section blocks visually.
3. **Backup & Restore**:
   - Under the **Data** tab in the CMS drawer or Admin page:
     - Click **Export Data JSON** to download a `.json` backup of your current content.
     - Paste or upload JSON into the **Import Data** section to load new content.
     - Click **Reset to Defaults** to restore seed data from `src/cms/defaultData.js`.

---

## 📄 License

This project is open-source under the MIT License.
