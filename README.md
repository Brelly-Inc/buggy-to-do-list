# To-Do List Debugging Exercise

## Overview

Welcome to the To-Do List Debugging Exercise! This project is a simple to-do list application built with a React frontend and an Express backend. However, there are 7 intentional bugs spread across the frontend and backend code.

## Your Goal

Your task is to identify and fix these bugs to get the application working correctly. Thereâ€™s no need to add or delete files; simply debug the existing code.

## Rules

- You are allowed to look up documentation and resources online.
- Use of AI tools (such as ChatGPT) is not permitted.

## Frontend

### Stack

- **React**: A JavaScript library for building user interfaces.
- **Axios**: Promise-based HTTP client for the browser and Node.js.
- **TypeScript**: A typed superset of JavaScript that compiles to plain JavaScript.

### Installation

Navigate to the frontend directory and install the dependencies:

```bash
cd frontend
yarn install
```

### Start

Start the frontend development server:

```bash
yarn start
```

The frontend should now be running on `http://localhost:3000`.

## Backend

### Stack

- **Express**: A minimal and flexible Node.js web application framework.
- **SQLite**: A lightweight, disk-based SQL database.
- **TypeScript**: A typed superset of JavaScript that compiles to plain JavaScript.

### Installation

Navigate to the backend directory and install the dependencies:

```bash
cd backend
yarn install
```

### Start

Start the backend server:

```bash
yarn start
```

The backend should now be running on `http://localhost:8080`.

## Other Thoughts

### How Could This Be Improved?

- **Code Quality**: Implement linting and formatting tools like ESLint and Prettier to maintain consistent code style.
- **Error Handling**: Add comprehensive error handling and user feedback mechanisms.
- **Input Validation**: Validate user input on both the frontend and backend to ensure data integrity.
- **Security Enhancements**: Implement security best practices, such as preventing SQL injection and cross-site scripting (XSS).
- **User Experience**: Enhance the UI/UX with better styling, responsive design, and accessibility improvements.
- **Scalability**: Consider using a more robust database system and state management for larger datasets.
- **Testing**: Write automated tests to catch bugs early and ensure code reliability.

### How Could the Frontend and Backend Be Tested?

- **Unit Testing**:
  - **Frontend**: Use frameworks like Jest and React Testing Library to test components and functions.
  - **Backend**: Use Jest or Mocha and Chai to test API endpoints and business logic.
- **Integration Testing**: Test the interaction between frontend and backend using tools like Cypress.
- **End-to-End Testing**: Simulate user interactions and workflows using Selenium or Puppeteer.
- **API Testing**: Use Postman or Insomnia to manually test API endpoints and automate tests.

### Other Thoughts?

- **Documentation**: Add inline comments and documentation to improve code maintainability.
- **Continuous Integration**: Set up CI/CD pipelines to automate testing and deployment.
- **Performance Optimization**: Analyze and optimize the applicationâ€™s performance.
- **State Management**: Implement a state management library like Redux or Context API for better state handling in the frontend.
- **Modularization**: Break down larger components into smaller, reusable pieces.

## Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/Brelly-Inc/buggy-to-do-list.git
```

### 2. Start the Backend

Navigate to the backend directory:

```bash
cd backend
yarn install
yarn start
```

### 3. Start the Frontend

Open a new terminal window:

```bash
cd frontend
yarn install
yarn start
```

### 4. Access the Application

Open your browser and navigate to `http://localhost:3000`.

## Tips for Debugging

- **Check the Console**: Look for error messages in the browser console and the terminal where the backend is running.
- **Read Error Messages Carefully**: They often provide clues about whatâ€™s wrong and where to look.
- **Use Debugging Tools**:
  - **Frontend**: Use browser developer tools to inspect elements, debug JavaScript, and monitor network requests.
  - **Backend**: Use a debugger or add console logs to trace the execution flow.
- **Test Incrementally**: After fixing a bug, test the application to see if it resolves the issue before moving on.
- **Review Network Requests**: Ensure that API calls are being made to the correct endpoints and that the responses are as expected.
- **Validate Data Flow**: Check how data moves through the application from the frontend to the backend and vice versa.

## Conclusion

This exercise is designed to test your debugging skills and your understanding of a full-stack application built with React and Express. Take your time to methodically identify and fix the bugs. Good luck, and happy debugging!
