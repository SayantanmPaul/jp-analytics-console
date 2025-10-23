# Analytics Console Assignment~ JP
A modern analytics dashboard built for performance, accessibility, and developer scalability. 

This project provides an implementation of an edge-to-edge, responsive React dashboard made from the provided Figma designs, with a focus on clean architecture, accessibility, and optimal performance.

### Development Flow

- **Setup & Theming**: Configured global design system using Tailwind + CSS variables for color tokens and typography.
Global layout and component spacing adjusted to achieve pixel parity with the provided Figma.
- **State Management:** Implemented Zustand with persistent storage for UI states like sidebar open/close and viewport detection.
- **Data Simulation**:
  - Created a mock API layer with a custom hook that delays responses using setTimeout to simulate network latency.
  - Enabled skeleton loading for all micro components to mimic real-world async data flow.
- **Micro-interactions**: Used Framer Motion for sidebar transitions, chart animations, and subtle entry delays.
- **Accessibility**:
  - Every interactive element has a role/aria-label.
  - Verified keyboard navigation and focus order manually.
  - 90+ Lighthouse scores across Performance, Accessibility, Best Practices, and SEO.

### Performance Optimization

- **Code Splitting**:  Lazy-loaded routes and charts for faster initial load.
- **Optimized Recharts**: Custom tooltips and axis formatting to avoid unnecessary re-renders.
- **Reduced Layout Shift**:  Skeleton components ensure visual stability during loading.
- **UI Context**: Zustand’s global context store reduces unnecessary re-renders across components.

##  Setup the project locally

### Prerequisites

- [Node.js](https://nodejs.org/en/) (v20 or higher recommended)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/) or [pnpm](https://pnpm.io/)

### Project Structure

```
jp-analytics-console/
├── api/                  # API client functions
├── src/
│   ├── app/              # Main application pages, layouts, and routes
|   |-- assets/           # Local fonts, images, and icons svgs
│   ├── components/       
│   │   ├── dashboard/    # dashboard components
│   │   ├── layout/       # right/left sidebar, navbar components
│   │   ├── order-list/   # orders page components
│   │   ├── shared/       # most used components across the app
│   │   ├── ui/           # Core UI elements (buttons, cards, etc.)
│   ├── data/             # contains sample mock data and type
│   ├── lib/              # utils, queryprovider, and queries
│   ├── store/            # Zustand store (global state)
│   └── lib/              # helper functions and Zustand context store
└──...
```


### Installation

1.  Clone the repository:
    ```bash
    git clone https://github.com/SayantanmPaul/jp-analytics-console
    ```
2.  Navigate to the project directory:
    ```bash
    cd juspay-analytics-console
    ```
3.  Install dependencies:
    ```bash
    npm install
    ```
### Running the Development Server

To start the development server, run:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
