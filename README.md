# Anjali Portfolio Website

A modern, responsive product designer portfolio website built with React and styled with Tailwind CSS. This project is designed to showcase Anjali's work as a product designer in a clean, professional layout.

![Anjali Portfolio Preview](https://via.placeholder.com/800x400?text=Anjali+Portfolio+Preview)

## Features

- 🎨 Modern design based on Figma template
- 📱 Fully responsive layout for all devices
- 🔍 Portfolio project showcase
- 📝 Contact form
- 🚀 Optimized performance
- 🐳 Docker ready for easy deployment

## Table of Contents

- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Development](#development)
  - [Available Scripts](#available-scripts)
  - [Project Structure](#project-structure)
  - [Customization](#customization)
- [Docker Deployment](#docker-deployment)
- [Synology NAS Deployment](#synology-nas-deployment)
- [Contributing](#contributing)
- [License](#license)

## Getting Started

### Prerequisites

- Node.js (v14 or later)
- npm or yarn package manager
- Git (optional)

### Installation

1. Clone the repository (or download the ZIP file):

```bash
git clone https://github.com/yourusername/anjali-portfolio.git
cd anjali-portfolio
```

2. Install dependencies:

```bash
npm install
# or
yarn install
```

3. Start the development server:

```bash
npm start
# or
yarn start
```

4. Open your browser and navigate to `http://localhost:3000`

## Development

### Available Scripts

In the project directory, you can run:

- `npm start`: Runs the app in development mode
- `npm test`: Launches the test runner
- `npm run build`: Builds the app for production
- `npm run eject`: Ejects from create-react-app (one-way operation)

### Project Structure

```
anjali-portfolio/
├── public/                # Public assets
│   └── index.html         # HTML template
├── src/                   # Source files
│   ├── App.js             # Main React component
│   ├── index.js           # Application entry point
│   └── index.css          # Global styles
├── Dockerfile             # Docker configuration
├── docker-compose.yml     # Docker Compose configuration
├── nginx.conf             # Nginx configuration for Docker
├── .dockerignore          # Docker ignore file
├── package.json           # Dependencies and scripts
└── tailwind.config.js     # Tailwind CSS configuration
```

### Customization

#### Content

To customize the website content, edit the text and image placeholders in `src/App.js`. The main sections are:

- Hero section (intro)
- About section
- Works/Projects section
- Contact section

#### Styling

This project uses Tailwind CSS for styling. To customize:

1. Modify the theme in `tailwind.config.js` for global changes
2. Edit the component classes in `App.js` for component-specific styling
3. Add custom CSS in `src/index.css` if needed

#### Adding Projects

To add or modify portfolio projects, locate the `WorksSection` component in `App.js` and update the `ProjectCard` components:

```jsx
<ProjectCard 
  title="Your Project Title" 
  category="Project Category" 
  imgPlaceholder="Project Image Description"
  // Add real image when available
/>
```

## Docker Deployment

This project can be easily deployed using Docker:

1. Make sure Docker and Docker Compose are installed on your system
2. Navigate to the project directory
3. Build and start the container:

```bash
docker-compose up -d
```

4. Access the website at `http://localhost:8080`

To stop the container:

```bash
docker-compose down
```

## Synology NAS Deployment

For detailed instructions on deploying to a Synology NAS, please refer to the [Docker Deployment Guide for Synology NAS](synology-docker-guide.md).

The guide covers:
- Setting up Docker on your Synology NAS
- Transferring files
- Building and running the container
- Accessing and updating the website
- Troubleshooting

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

---

## Credits

- Design based on Figma template
- Built with [React](https://reactjs.org/)
- Styled with [Tailwind CSS](https://tailwindcss.com/)
- Icons from [Lucide React](https://lucide.dev/)
