# Todo App

A responsive todo list application built with React and TypeScript. It lets users create, edit, complete, filter, and delete tasks while keeping the data synchronized with a REST API.

## Live Preview

[Open the deployed application](https://achekcss.github.io/frontend-to-do-app/)

## Technologies Used

- React 18
- TypeScript
- Vite
- SCSS
- Bulma
- Font Awesome
- REST API with the Fetch API

## Getting Started

### Prerequisites

- Node.js 20 or later
- npm

### Installation

Clone the repository and install its dependencies:

```bash
git clone https://github.com/AchekcSs/frontend-to-do-app.git
cd frontend-to-do-app
npm install
```

### Run locally

Start the development server:

```bash
npm start
```

The application will be available at the local URL shown in the terminal.

### Create a production build

```bash
npm run build
```

### Deploy to GitHub Pages

```bash
npm run deploy
```

## Features

- Load todos from the API
- Add new todos
- Edit todo titles by double-clicking them
- Mark individual todos as completed
- Mark all todos as completed or active
- Filter todos by All, Active, or Completed
- Delete individual todos
- Clear all completed todos
- Display loading states and temporary todos during API requests
- Show auto-dismissing error notifications when an API request fails
