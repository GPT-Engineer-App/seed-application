# Vite React Project

This is a bare-bones React application created with Vite.

## Prerequisites

- Node.js (version 14 or later)
- npm (usually comes with Node.js)

## Installation

1. Clone the repository:
   ```
   git clone [repository-url]
   cd [project-directory]
   ```

2. Install dependencies:
   ```
   npm ci
   ```

## Running the Application

To start the development server:

```
npm run dev
```

The application will be available at `http://localhost:5173` (or another port if 5173 is in use).

## Building for Production

To create a production build:

```
npm run build
```

The built files will be in the `dist` directory.

## Additional Commands

- Lint the code:
  ```
  npm run lint
  ```

- Preview the production build:
  ```
  npm run preview
  ```

## Project Structure

- `src/`: Source files
  - `main.jsx`: Entry point of the application
  - `App.jsx`: Main application component
- `public/`: Static assets
- `index.html`: HTML template

## Technologies Used

- React
- Vite
- ESLint
- Tailwind CSS