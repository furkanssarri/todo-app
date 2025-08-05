# Todo App

A modern, feature-rich todo application built with vanilla JavaScript, HTML, and CSS. This project demonstrates advanced JavaScript concepts including ES6 modules, local storage, object-oriented programming, and webpack bundling.

## 🚀 Live Demo

**[View Live Demo](https://furkanssarri.github.io/todo-app/)**

## 📋 Features

-  ✅ **Create, Edit, and Delete Todos** - Full CRUD operations for managing tasks
-  📝 **Custom Lists** - Organize todos into different categories/projects
-  🎯 **Priority Levels** - Set and manage task priorities
-  📅 **Due Dates** - Schedule tasks with date-fns integration
-  ✔️ **Mark Complete** - Toggle completion status
-  🔍 **Filter & Search** - Filter todos by status, priority, or list
-  💾 **Local Storage** - Persistent data storage in browser
-  📱 **Responsive Design** - Works seamlessly on desktop and mobile
-  🎨 **Smooth Animations** - Enhanced UX with Animate.css
-  🏗️ **Modular Architecture** - Clean, maintainable code structure

## 🛠️ Technologies Used

-  **JavaScript (ES6+)** - Modern JavaScript with classes, modules, and arrow functions
-  **HTML5** - Semantic markup structure
-  **CSS3** - Custom styling with Flexbox/Grid layouts
-  **Webpack** - Module bundling and build optimization
-  **Babel** - JavaScript transpilation for browser compatibility
-  **ESLint** - Code linting and quality assurance
-  **Prettier** - Code formatting
-  **Animate.css** - CSS animation library
-  **FontAwesome** - Icon library
-  **date-fns** - Date manipulation library
-  **UUID** - Unique identifier generation

## 📁 Project Structure

```txt
todo-app/
├── src/
│   ├── modules/
│   │   ├── Todo.js          # Todo class definition
│   │   ├── List.js          # List class definition
│   │   ├── storage.js       # Local storage operations
│   │   ├── render.js        # DOM rendering functions
│   │   ├── createForm.js    # Form generation logic
│   │   ├── data.js          # Data management
│   │   ├── utility.js       # Helper functions
│   │   ├── leftMenu.js      # Navigation menu logic
│   │   └── barrel.js        # Module exports aggregation
│   ├── index.js             # Main application entry point
│   ├── style.css            # Application styles
│   └── template.html        # HTML template
├── webpack.common.js        # Shared webpack configuration
├── webpack.dev.js           # Development webpack config
├── webpack.prod.js          # Production webpack config
├── babel.config.json        # Babel configuration
├── eslint.config.mjs        # ESLint configuration
├── .prettierrc              # Prettier configuration
└── package.json             # Project dependencies and scripts
```

## 🚦 Getting Started

### Prerequisites

-  Node.js (v14 or higher)
-  npm or yarn package manager

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/furkanssarri/todo-app.git
   cd todo-app
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start development server**

   ```bash
   npm run dev
   ```

   This will open the application in your default browser at `http://localhost:8080`

## 📜 Available Scripts

-  `npm run dev` - Start development server with hot reloading
-  `npm run build` - Build for development
-  `npm start` - Build for production
-  `npm run deploy` - Deploy to GitHub Pages
-  `npm run babel` - Transpile source code with Babel

## 🏗️ Architecture Overview

### Core Classes

**Todo Class** (`src/modules/Todo.js`)

-  Represents individual todo items
-  Properties: id, title, description, dueDate, priority, listId, isComplete
-  Methods: getters/setters, JSON serialization

**List Class** (`src/modules/List.js`)

-  Represents todo lists/categories
-  Properties: id, title, description
-  Methods: filterTodos(), JSON serialization

### Key Features

#### Local Storage Integration

-  Persistent data storage using browser's localStorage
-  Automatic save/load functionality
-  Data serialization/deserialization

#### Modular Design

-  Separation of concerns with dedicated modules
-  Barrel exports for clean imports
-  Reusable utility functions

#### Responsive UI

-  Mobile-first design approach
-  Flexible layout with CSS Grid/Flexbox
-  Smooth animations and transitions

## 📝 License

This project is licensed under the MIT License.

## 🙏 Acknowledgments

-  Built as part of [The Odin Project](https://www.theodinproject.com/) JavaScript curriculum
-  Icons provided by [FontAwesome](https://fontawesome.com/)
-  Animations powered by [Animate.css](https://animate.style/)
-  Date handling by [date-fns](https://date-fns.org/)

## 👤 Acknowledgements

Built by [furkanssarri](https://github.com/furkanssarri) for [The Odin Project](https://www.theodinproject.com/).

---

⭐ Star this repository if you found it helpful!
