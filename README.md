# Full-Stack Starter Project

## Introduction
This is a full-stack web application project, designed to demonstrate a robust setup using modern web development tools and practices. The project is structured into two main parts: the `api` directory, which contains the backend code, and the `app` directory for the frontend.

## Features
- **Backend (`api`)**: Node.js with Express framework.
- **Frontend (`app`)**: React application built with Vite.
- **Styling**: Tailwind CSS for utility-first styling.
- **Code Quality**: ESLint and Prettier for code linting and formatting.
- **Environment Configuration**: `.env` for managing environment variables.

## Prerequisites
- Node.js and npm
- Git (for version control)

## Setup and Installation

### Cloning the Repository
```bash
git clone <repository-url>
cd <repository-name>
```

### Installing Dependencies
Install dependencies for both the frontend and backend:

#### Backend dependencies
```bash
cd api
npm install
```

#### Frontend dependencies
```bash
cd ../app
npm install
```

### Environment Configuration
Create a `.env` file in the `api` directory based on the `.env.example` provided.

### Running the Application Locally

#### Backend
From the `api` directory, start the backend server:
```bash
npm start
```

#### Frontend
From the `app` directory, start the React application:
```bash
npm run dev
```

## Directory Structure
- `/api`: Backend application.
  - `/src`: Backend source files.
- `/app`: Frontend React application.
  - `/src`: Frontend source files.
  - `/public`: Public assets for the frontend.
- `.gitignore`: Specifies intentionally untracked files to ignore.
- `README.md`: Documentation for the project.
